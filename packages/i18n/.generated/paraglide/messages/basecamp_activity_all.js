/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Activity_AllInputs */

const en_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All notifications`)
};

const es_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las notificaciones`)
};

const de_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Benachrichtigungen`)
};

const fr_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les notifications`)
};

const it_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le notifiche`)
};

const nl_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle meldingen`)
};

const pl_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie powiadomienia`)
};

const pt_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as notificações`)
};

const ru_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все уведомления`)
};

const sv_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla aviseringar`)
};

const tr_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm bildirimler`)
};

const zh_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部通知`)
};

const ja_basecamp_activity_all = /** @type {(inputs: Basecamp_Activity_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての通知`)
};

/**
* | output |
* | --- |
* | "All notifications" |
*
* @param {Basecamp_Activity_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_activity_all = /** @type {((inputs?: Basecamp_Activity_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Activity_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_activity_all(inputs)
	if (locale === "de") return de_basecamp_activity_all(inputs)
	if (locale === "fr") return fr_basecamp_activity_all(inputs)
	if (locale === "it") return it_basecamp_activity_all(inputs)
	if (locale === "nl") return nl_basecamp_activity_all(inputs)
	if (locale === "pl") return pl_basecamp_activity_all(inputs)
	if (locale === "pt") return pt_basecamp_activity_all(inputs)
	if (locale === "ru") return ru_basecamp_activity_all(inputs)
	if (locale === "sv") return sv_basecamp_activity_all(inputs)
	if (locale === "tr") return tr_basecamp_activity_all(inputs)
	if (locale === "zh") return zh_basecamp_activity_all(inputs)
	if (locale === "ja") return ja_basecamp_activity_all(inputs)
	return en_basecamp_activity_all(inputs)
});
