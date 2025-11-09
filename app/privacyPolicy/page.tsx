"use client";

import { Container } from "@/components/container";
import React from "react";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 md:py-12">
            <Container>
                <div className="max-w-4xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-6 md:p-12">
                    {/* Заголовок */}
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 break-words">
                            Политика конфиденциальности
                        </h1>
                        <div className="w-20 md:w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 text-base md:text-lg">
                            Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
                        </p>
                    </div>

                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
                        {/* Общие положения */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                1. Общие положения
                            </h2>
                            <p className="mb-4 text-sm sm:text-base">
                                Настоящая политика обработки персональных данных составлена в соответствии с
                                требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных» и
                                определяет порядок обработки персональных данных и меры по обеспечению безопасности
                                персональных данных, предпринимаемые компанией (далее – Оператор).
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 my-4 md:my-6">
                                <p className="text-blue-800 font-medium text-sm sm:text-base">
                                    Оператор ставит своей важнейшей целью и условием осуществления своей деятельности
                                    соблюдение прав и свобод человека и гражданина при обработке его персональных
                                    данных.
                                </p>
                            </div>
                        </section>

                        {/* Основные понятия */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                2. Основные понятия, используемые в Политике
                            </h2>
                            <ul className="space-y-2 md:space-y-3 list-disc list-inside text-sm sm:text-base">
                                <li>
                                    <strong>Автоматизированная обработка персональных данных</strong> — обработка
                                    персональных данных с помощью средств вычислительной техники;
                                </li>
                                <li>
                                    <strong>Блокирование персональных данных</strong> — временное прекращение обработки
                                    персональных данных (за исключением случаев, если обработка необходима для уточнения
                                    персональных данных);
                                </li>
                                <li>
                                    <strong>Персональные данные</strong> — любая информация, относящаяся к прямо или
                                    косвенно определенному или определяемому физическому лицу (субъекту персональных
                                    данных);
                                </li>
                                <li>
                                    <strong>Обработка персональных данных</strong> — любое действие (операция) или
                                    совокупность действий (операций), совершаемых с использованием средств автоматизации
                                    или без использования таких средств с персональными данными;
                                </li>
                                <li>
                                    <strong>Конфиденциальность персональных данных</strong> — обязательное для
                                    соблюдения Оператором или иным получившим доступ к персональным данным лицом
                                    требование не допускать их распространения без согласия субъекта персональных данных
                                    или наличия иного законного основания.
                                </li>
                            </ul>
                        </section>

                        {/* Цели сбора персональных данных */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                3. Цели обработки персональных данных
                            </h2>
                            <p className="mb-4 text-sm sm:text-base">
                                Оператор обрабатывает персональные данные пользователей в следующих целях:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 my-4 md:my-6">
                                <div className="bg-green-50 p-3 md:p-4 rounded-lg border border-green-200">
                                    <div className="text-green-600 text-base md:text-lg mb-2">📞</div>
                                    <h3 className="font-semibold text-green-800 mb-2 text-sm md:text-base">
                                        Связь с клиентами
                                    </h3>
                                    <p className="text-green-700 text-xs md:text-sm">
                                        Для обратной связи, консультаций и ответов на вопросы пользователей
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-200">
                                    <div className="text-blue-600 text-base md:text-lg mb-2">📊</div>
                                    <h3 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">
                                        Предоставление услуг
                                    </h3>
                                    <p className="text-blue-700 text-xs md:text-sm">
                                        Для расчета стоимости и оказания фулфилмент-услуг
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-3 md:p-4 rounded-lg border border-purple-200">
                                    <div className="text-purple-600 text-base md:text-lg mb-2">📧</div>
                                    <h3 className="font-semibold text-purple-800 mb-2 text-sm md:text-base">
                                        Информирование
                                    </h3>
                                    <p className="text-purple-700 text-xs md:text-sm">
                                        Для отправки уведомлений о статусе заявок и изменениях в услугах
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-200">
                                    <div className="text-orange-600 text-base md:text-lg mb-2">🔒</div>
                                    <h3 className="font-semibold text-orange-800 mb-2 text-sm md:text-base">
                                        Безопасность
                                    </h3>
                                    <p className="text-orange-700 text-xs md:text-sm">
                                        Для обеспечения безопасности и предотвращения мошенничества
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Правовые основания */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                4. Правовые основания обработки персональных данных
                            </h2>
                            <p className="mb-4 text-sm sm:text-base">
                                Оператор обрабатывает персональные данные пользователей на следующих правовых
                                основаниях:
                            </p>
                            <ul className="space-y-2 list-decimal list-inside bg-gray-50 p-4 md:p-6 rounded-lg text-sm sm:text-base">
                                <li className="mb-2">
                                    <strong>Согласие субъекта персональных данных</strong> — путем заполнения форм на
                                    сайте;
                                </li>
                                <li className="mb-2">
                                    <strong>Заключение и исполнение договора</strong> — при принятии пользователем
                                    оферты на оказание услуг;
                                </li>
                                <li className="mb-2">
                                    <strong>Законные интересы Оператора</strong> — для улучшения качества услуг и
                                    сервиса;
                                </li>
                                <li>
                                    <strong>Выполнение требований законодательства</strong> — в случаях, предусмотренных
                                    федеральными законами.
                                </li>
                            </ul>
                        </section>

                        {/* Состав персональных данных */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                5. Состав обрабатываемых персональных данных
                            </h2>
                            <div className="overflow-x-auto -mx-2 md:mx-0">
                                <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2 px-3 md:py-3 md:px-4 border-b text-left font-semibold text-gray-700 text-xs md:text-sm">
                                                Категория данных
                                            </th>
                                            <th className="py-2 px-3 md:py-3 md:px-4 border-b text-left font-semibold text-gray-700 text-xs md:text-sm">
                                                Примеры
                                            </th>
                                            <th className="py-2 px-3 md:py-3 md:px-4 border-b text-left font-semibold text-gray-700 text-xs md:text-sm">
                                                Способ сбора
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Контактные данные
                                            </td>
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Имя, телефон, email
                                            </td>
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Формы на сайте
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Служебные данные
                                            </td>
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Выбранные услуги, история обращений
                                            </td>
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                В процессе оказания услуг
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Технические данные
                                            </td>
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                IP-адрес, cookies, данные браузера
                                            </td>
                                            <td className="py-2 px-3 md:py-3 md:px-4 border-b text-xs md:text-sm">
                                                Автоматически при посещении сайта
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Порядок сбора, хранения и передачи */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                6. Порядок сбора, хранения, передачи и других видов обработки персональных данных
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                        <span className="text-green-600 text-xs md:text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                            Безопасность данных
                                        </h3>
                                        <p className="text-gray-700 text-xs md:text-sm">
                                            Безопасность персональных данных, которые обрабатываются Оператором,
                                            обеспечивается путем реализации правовых, организационных и технических мер,
                                            необходимых для выполнения в полном объеме требований действующего
                                            законодательства в области защиты персональных данных.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                        <span className="text-blue-600 text-xs md:text-sm">⏱</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                            Сроки хранения
                                        </h3>
                                        <p className="text-gray-700 text-xs md:text-sm">
                                            Персональные данные пользователей хранятся в течение срока, необходимого для
                                            достижения целей обработки, если иной срок не предусмотрен законодательством
                                            РФ. Обрабатываемые персональные данные уничтожаются либо обезличиваются по
                                            достижении целей обработки.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                                        <span className="text-red-600 text-xs md:text-sm">🚫</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                            Передача данных
                                        </h3>
                                        <p className="text-gray-700 text-xs md:text-sm">
                                            Оператор не передает персональные данные третьим лицам без согласия субъекта
                                            персональных данных, за исключением случаев, предусмотренных
                                            законодательством РФ.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Права субъектов персональных данных */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                7. Права субъектов персональных данных
                            </h2>
                            <p className="mb-4 text-sm sm:text-base">Субъекты персональных данных имеют право:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                <div className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
                                    <div className="text-yellow-600 text-base md:text-lg mb-2">👁</div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                        Доступ к информации
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm">
                                        Получать информацию regarding обработки своих персональных данных
                                    </p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
                                    <div className="text-green-600 text-base md:text-lg mb-2">✏️</div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                        Изменение данных
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm">
                                        Требовать уточнения своих персональных данных, их блокирования или уничтожения
                                    </p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
                                    <div className="text-red-600 text-base md:text-lg mb-2">🚫</div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                        Отзыв согласия
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm">
                                        Отозвать свое согласие на обработку персональных данных
                                    </p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
                                    <div className="text-blue-600 text-base md:text-lg mb-2">⚖️</div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                                        Обжалование действий
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm">
                                        Обжаловать действия или бездействие Оператора в уполномоченный орган
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Заключительные положения */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 border-b-2 border-green-200 pb-2">
                                8. Заключительные положения
                            </h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg">
                                <p className="text-yellow-800 mb-3 md:mb-4 text-sm sm:text-base">
                                    <strong>Важно:</strong> Пользователь может получить любые разъяснения по
                                    интересующим вопросам, касающимся обработки его персональных данных, обратившись к
                                    Оператору с помощью электронной почты или телефона, указанных на сайте.
                                </p>
                                <p className="text-yellow-800 text-sm sm:text-base">
                                    Оператор обязан публиковать или иным образом обеспечивать неограниченный доступ к
                                    настоящей Политике конфиденциальности.
                                </p>
                            </div>
                        </section>

                        {/* Контактная информация */}
                        <section className="bg-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                Контактная информация
                            </h3>
                            <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                                По всем вопросам, связанным с обработкой ваших персональных данных, вы можете обратиться
                                к нам:
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-4 md:mt-6">
                                <div className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                                    <span>📧</span>
                                    <span>info@fulfillment.ru</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                                    <span>📞</span>
                                    <span>+7 (999) 123-45-67</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
