/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_ResolvedInputs */

const en_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug marked as resolved`)
};

const es_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug marcado como resuelto`)
};

const de_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehler als gelöst markiert`)
};

const fr_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug marqué comme résolu`)
};

const it_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug segnato come risolto`)
};

const nl_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug gemarkeerd als opgelost`)
};

const pl_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błąd oznaczony jako rozwiązany`)
};

const pt_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug marcado como resolvido`)
};

const ru_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибка отмечена как решённая`)
};

const sv_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felet markerat som löst`)
};

const tr_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata çözüldü olarak işaretlendi`)
};

const zh_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误已标记为已解决`)
};

const ja_basecamp_inbox_resolved = /** @type {(inputs: Basecamp_Inbox_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不具合を解決済みにしました`)
};

/**
* | output |
* | --- |
* | "Bug marked as resolved" |
*
* @param {Basecamp_Inbox_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_resolved = /** @type {((inputs?: Basecamp_Inbox_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_resolved(inputs)
	if (locale === "de") return de_basecamp_inbox_resolved(inputs)
	if (locale === "fr") return fr_basecamp_inbox_resolved(inputs)
	if (locale === "it") return it_basecamp_inbox_resolved(inputs)
	if (locale === "nl") return nl_basecamp_inbox_resolved(inputs)
	if (locale === "pl") return pl_basecamp_inbox_resolved(inputs)
	if (locale === "pt") return pt_basecamp_inbox_resolved(inputs)
	if (locale === "ru") return ru_basecamp_inbox_resolved(inputs)
	if (locale === "sv") return sv_basecamp_inbox_resolved(inputs)
	if (locale === "tr") return tr_basecamp_inbox_resolved(inputs)
	if (locale === "zh") return zh_basecamp_inbox_resolved(inputs)
	if (locale === "ja") return ja_basecamp_inbox_resolved(inputs)
	return en_basecamp_inbox_resolved(inputs)
});
