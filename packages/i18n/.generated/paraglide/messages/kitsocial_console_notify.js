/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_NotifyInputs */

const en_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notify me of changes`)
};

const es_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisarme de los cambios`)
};

const de_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei Änderungen benachrichtigen`)
};

const fr_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Me prévenir des changements`)
};

const it_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisami delle modifiche`)
};

const nl_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meld mij wijzigingen`)
};

const pl_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiadamiaj o zmianach`)
};

const pt_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisar sobre mudanças`)
};

const ru_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уведомлять об изменениях`)
};

const sv_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddela mig om ändringar`)
};

const tr_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişikliklerde bana haber ver`)
};

const zh_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新时通知我`)
};

const ja_kitsocial_console_notify = /** @type {(inputs: Kitsocial_Console_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新を通知する`)
};

/**
* | output |
* | --- |
* | "Notify me of changes" |
*
* @param {Kitsocial_Console_NotifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_notify = /** @type {((inputs?: Kitsocial_Console_NotifyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_NotifyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_notify(inputs)
	if (locale === "de") return de_kitsocial_console_notify(inputs)
	if (locale === "fr") return fr_kitsocial_console_notify(inputs)
	if (locale === "it") return it_kitsocial_console_notify(inputs)
	if (locale === "nl") return nl_kitsocial_console_notify(inputs)
	if (locale === "pl") return pl_kitsocial_console_notify(inputs)
	if (locale === "pt") return pt_kitsocial_console_notify(inputs)
	if (locale === "ru") return ru_kitsocial_console_notify(inputs)
	if (locale === "sv") return sv_kitsocial_console_notify(inputs)
	if (locale === "tr") return tr_kitsocial_console_notify(inputs)
	if (locale === "zh") return zh_kitsocial_console_notify(inputs)
	if (locale === "ja") return ja_kitsocial_console_notify(inputs)
	return en_kitsocial_console_notify(inputs)
});
