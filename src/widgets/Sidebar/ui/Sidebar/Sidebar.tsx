import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid='sidebar-toggle'
        theme={ThemeButton.BACKGROUND}
        onClick={onToggle}
        className={cls.collapseBtn}
        size={SizeButton.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
