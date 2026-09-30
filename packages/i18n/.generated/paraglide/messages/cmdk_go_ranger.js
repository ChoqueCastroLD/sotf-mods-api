/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_RangerInputs */

const en_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger Station`)
};

const es_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puesto de guardabosques`)
};

const de_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger-Station`)
};

const fr_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poste des rangers`)
};

const it_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stazione dei ranger`)
};

const nl_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerpost`)
};

const pl_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posterunek rangerów`)
};

const pt_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posto de guarda`)
};

const ru_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пост рейнджеров`)
};

const sv_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerstationen`)
};

const tr_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu istasyonu`)
};

const zh_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林站`)
};

const ja_cmdk_go_ranger = /** @type {(inputs: Cmdk_Go_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーション`)
};

/**
* | output |
* | --- |
* | "Ranger Station" |
*
* @param {Cmdk_Go_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_ranger = /** @type {((inputs?: Cmdk_Go_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_ranger(inputs)
	if (locale === "de") return de_cmdk_go_ranger(inputs)
	if (locale === "fr") return fr_cmdk_go_ranger(inputs)
	if (locale === "it") return it_cmdk_go_ranger(inputs)
	if (locale === "nl") return nl_cmdk_go_ranger(inputs)
	if (locale === "pl") return pl_cmdk_go_ranger(inputs)
	if (locale === "pt") return pt_cmdk_go_ranger(inputs)
	if (locale === "ru") return ru_cmdk_go_ranger(inputs)
	if (locale === "sv") return sv_cmdk_go_ranger(inputs)
	if (locale === "tr") return tr_cmdk_go_ranger(inputs)
	if (locale === "zh") return zh_cmdk_go_ranger(inputs)
	if (locale === "ja") return ja_cmdk_go_ranger(inputs)
	return en_cmdk_go_ranger(inputs)
});
