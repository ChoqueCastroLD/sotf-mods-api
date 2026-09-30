/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_State_ResolvedInputs */

const en_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolved`)
};

const es_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resuelto`)
};

const de_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelöst`)
};

const fr_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résolu`)
};

const it_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolto`)
};

const nl_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgelost`)
};

const pl_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiązane`)
};

const pt_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolvido`)
};

const ru_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решено`)
};

const sv_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löst`)
};

const tr_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüldü`)
};

const zh_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已解决`)
};

const ja_basecamp_inbox_state_resolved = /** @type {(inputs: Basecamp_Inbox_State_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決済み`)
};

/**
* | output |
* | --- |
* | "Resolved" |
*
* @param {Basecamp_Inbox_State_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_state_resolved = /** @type {((inputs?: Basecamp_Inbox_State_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_State_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_state_resolved(inputs)
	if (locale === "de") return de_basecamp_inbox_state_resolved(inputs)
	if (locale === "fr") return fr_basecamp_inbox_state_resolved(inputs)
	if (locale === "it") return it_basecamp_inbox_state_resolved(inputs)
	if (locale === "nl") return nl_basecamp_inbox_state_resolved(inputs)
	if (locale === "pl") return pl_basecamp_inbox_state_resolved(inputs)
	if (locale === "pt") return pt_basecamp_inbox_state_resolved(inputs)
	if (locale === "ru") return ru_basecamp_inbox_state_resolved(inputs)
	if (locale === "sv") return sv_basecamp_inbox_state_resolved(inputs)
	if (locale === "tr") return tr_basecamp_inbox_state_resolved(inputs)
	if (locale === "zh") return zh_basecamp_inbox_state_resolved(inputs)
	if (locale === "ja") return ja_basecamp_inbox_state_resolved(inputs)
	return en_basecamp_inbox_state_resolved(inputs)
});
