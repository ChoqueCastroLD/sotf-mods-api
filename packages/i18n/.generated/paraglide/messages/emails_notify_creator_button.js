/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Creator_ButtonInputs */

const en_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open your analytics`)
};

const es_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir tus estadísticas`)
};

const de_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Statistiken öffnen`)
};

const fr_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir vos statistiques`)
};

const it_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri le tue statistiche`)
};

const nl_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je statistieken openen`)
};

const pl_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz statystyki`)
};

const pt_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir suas estatísticas`)
};

const ru_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть статистику`)
};

const sv_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna din statistik`)
};

const tr_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstatistiklerini aç`)
};

const zh_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开你的数据分析`)
};

const ja_emails_notify_creator_button = /** @type {(inputs: Emails_Notify_Creator_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アナリティクスを開く`)
};

/**
* | output |
* | --- |
* | "Open your analytics" |
*
* @param {Emails_Notify_Creator_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_button = /** @type {((inputs?: Emails_Notify_Creator_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_button(inputs)
	if (locale === "de") return de_emails_notify_creator_button(inputs)
	if (locale === "fr") return fr_emails_notify_creator_button(inputs)
	if (locale === "it") return it_emails_notify_creator_button(inputs)
	if (locale === "nl") return nl_emails_notify_creator_button(inputs)
	if (locale === "pl") return pl_emails_notify_creator_button(inputs)
	if (locale === "pt") return pt_emails_notify_creator_button(inputs)
	if (locale === "ru") return ru_emails_notify_creator_button(inputs)
	if (locale === "sv") return sv_emails_notify_creator_button(inputs)
	if (locale === "tr") return tr_emails_notify_creator_button(inputs)
	if (locale === "zh") return zh_emails_notify_creator_button(inputs)
	if (locale === "ja") return ja_emails_notify_creator_button(inputs)
	return en_emails_notify_creator_button(inputs)
});
