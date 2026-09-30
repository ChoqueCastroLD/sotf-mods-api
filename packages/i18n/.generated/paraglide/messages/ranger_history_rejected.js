/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_RejectedInputs */

const en_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods rejected`)
};

const es_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods rechazados`)
};

const de_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abgelehnte Mods`)
};

const fr_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods refusés`)
};

const it_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod rifiutate`)
};

const nl_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgewezen mods`)
};

const pl_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzucone mody`)
};

const pt_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods rejeitados`)
};

const ru_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонено модов`)
};

const sv_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisade moddar`)
};

const tr_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddedilen modlar`)
};

const zh_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被拒模组`)
};

const ja_ranger_history_rejected = /** @type {(inputs: Ranger_History_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`却下されたMOD`)
};

/**
* | output |
* | --- |
* | "Mods rejected" |
*
* @param {Ranger_History_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_rejected = /** @type {((inputs?: Ranger_History_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_rejected(inputs)
	if (locale === "de") return de_ranger_history_rejected(inputs)
	if (locale === "fr") return fr_ranger_history_rejected(inputs)
	if (locale === "it") return it_ranger_history_rejected(inputs)
	if (locale === "nl") return nl_ranger_history_rejected(inputs)
	if (locale === "pl") return pl_ranger_history_rejected(inputs)
	if (locale === "pt") return pt_ranger_history_rejected(inputs)
	if (locale === "ru") return ru_ranger_history_rejected(inputs)
	if (locale === "sv") return sv_ranger_history_rejected(inputs)
	if (locale === "tr") return tr_ranger_history_rejected(inputs)
	if (locale === "zh") return zh_ranger_history_rejected(inputs)
	if (locale === "ja") return ja_ranger_history_rejected(inputs)
	return en_ranger_history_rejected(inputs)
});
