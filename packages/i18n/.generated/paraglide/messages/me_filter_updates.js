/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Filter_UpdatesInputs */

const en_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates available`)
};

const es_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con actualización`)
};

const de_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update verfügbar`)
};

const fr_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour disponible`)
};

const it_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con aggiornamento`)
};

const nl_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update beschikbaar`)
};

const pl_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z aktualizacją`)
};

const pt_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com atualização`)
};

const ru_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С обновлением`)
};

const sv_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatering finns`)
};

const tr_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemesi olanlar`)
};

const zh_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有更新`)
};

const ja_me_filter_updates = /** @type {(inputs: Me_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデートあり`)
};

/**
* | output |
* | --- |
* | "Updates available" |
*
* @param {Me_Filter_UpdatesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_filter_updates = /** @type {((inputs?: Me_Filter_UpdatesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Filter_UpdatesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_filter_updates(inputs)
	if (locale === "de") return de_me_filter_updates(inputs)
	if (locale === "fr") return fr_me_filter_updates(inputs)
	if (locale === "it") return it_me_filter_updates(inputs)
	if (locale === "nl") return nl_me_filter_updates(inputs)
	if (locale === "pl") return pl_me_filter_updates(inputs)
	if (locale === "pt") return pt_me_filter_updates(inputs)
	if (locale === "ru") return ru_me_filter_updates(inputs)
	if (locale === "sv") return sv_me_filter_updates(inputs)
	if (locale === "tr") return tr_me_filter_updates(inputs)
	if (locale === "zh") return zh_me_filter_updates(inputs)
	if (locale === "ja") return ja_me_filter_updates(inputs)
	return en_me_filter_updates(inputs)
});
