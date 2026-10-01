/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_NotifyInputs */

const en_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get notified`)
};

const es_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recibir avisos`)
};

const de_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigt werden`)
};

const fr_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Être prévenu`)
};

const it_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricevi gli avvisi`)
};

const nl_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op de hoogte blijven`)
};

const pl_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otrzymuj powiadomienia`)
};

const pt_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receber avisos`)
};

const ru_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Получать уведомления`)
};

const sv_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Få aviseringar`)
};

const tr_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirim al`)
};

const zh_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接收通知`)
};

const ja_jams_first_notify = /** @type {(inputs: Jams_First_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知を受け取る`)
};

/**
* | output |
* | --- |
* | "Get notified" |
*
* @param {Jams_First_NotifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_notify = /** @type {((inputs?: Jams_First_NotifyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_NotifyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_notify(inputs)
	if (locale === "de") return de_jams_first_notify(inputs)
	if (locale === "fr") return fr_jams_first_notify(inputs)
	if (locale === "it") return it_jams_first_notify(inputs)
	if (locale === "nl") return nl_jams_first_notify(inputs)
	if (locale === "pl") return pl_jams_first_notify(inputs)
	if (locale === "pt") return pt_jams_first_notify(inputs)
	if (locale === "ru") return ru_jams_first_notify(inputs)
	if (locale === "sv") return sv_jams_first_notify(inputs)
	if (locale === "tr") return tr_jams_first_notify(inputs)
	if (locale === "zh") return zh_jams_first_notify(inputs)
	if (locale === "ja") return ja_jams_first_notify(inputs)
	return en_jams_first_notify(inputs)
});
