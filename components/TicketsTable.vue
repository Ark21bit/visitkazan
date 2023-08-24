<template>
    <Table class="lg:grid-cols-[1fr_repeat(2,minmax(auto,140px))]">
        <template #head>
            <TableTr>
                <TableTh>
                    Тип билета
                </TableTh>
                <TableTh>
                    Цена
                </TableTh>
                <TableTh class="justify-end">
                    Количество
                </TableTh>
            </TableTr>
        </template>
        <TableTr>
            <TableTd data-label="Тип билета">
                Детский
            </TableTd>
            <TableTd data-label="Цена">
                3999 ₽
            </TableTd>
            <TableTd data-label="Количество" class="justify-end">
                <FormKit type="counter"></FormKit>
            </TableTd>
        </TableTr>
        <TableTr>
            <TableTd data-label="Тип билета">
                Пенсионеры
            </TableTd>
            <TableTd data-label="Цена">
                3999 ₽
            </TableTd>
            <TableTd data-label="Количество" class="justify-end">
                <FormKit type="counter"></FormKit>
            </TableTd>
        </TableTr>
        <TableTr>
            <TableTd data-label="Тип билета">
                Студенты
            </TableTd>
            <TableTd data-label="Цена">
                3999 ₽
            </TableTd>
            <TableTd data-label="Количество" class="justify-end">
                <FormKit type="counter"></FormKit>
            </TableTd>
        </TableTr>
        <TableTr>
            <TableTd data-label="Тип билета">
                Взрослые
            </TableTd>
            <TableTd data-label="Цена">
                3999 ₽
            </TableTd>
            <TableTd data-label="Количество" class="justify-end">
                <FormKit type="counter"></FormKit>
            </TableTd>
        </TableTr>
    </Table>
</template>