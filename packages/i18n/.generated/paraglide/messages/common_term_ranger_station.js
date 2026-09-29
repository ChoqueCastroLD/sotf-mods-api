/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_Ranger_StationInputs */

const en_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger Station`)
};

const es_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puesto de guardabosques`)
};

const de_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerstation`)
};

const fr_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poste des rangers`)
};

const it_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stazione dei ranger`)
};

const nl_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerpost`)
};

const pl_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posterunek strażników`)
};

const pt_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posto dos guardas`)
};

const ru_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пост рейнджеров`)
};

const sv_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangerstation`)
};

const tr_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu İstasyonu`)
};

const zh_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林站`)
};

const ja_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーステーション`)
};

/**
* | output |
* | --- |
* | "Ranger Station" |
*
* @param {Common_Term_Ranger_StationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_ranger_station = /** @type {((inputs?: Common_Term_Ranger_StationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_Ranger_StationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_ranger_station(inputs)
	if (locale === "de") return de_common_term_ranger_station(inputs)
	if (locale === "fr") return fr_common_term_ranger_station(inputs)
	if (locale === "it") return it_common_term_ranger_station(inputs)
	if (locale === "nl") return nl_common_term_ranger_station(inputs)
	if (locale === "pl") return pl_common_term_ranger_station(inputs)
	if (locale === "pt") return pt_common_term_ranger_station(inputs)
	if (locale === "ru") return ru_common_term_ranger_station(inputs)
	if (locale === "sv") return sv_common_term_ranger_station(inputs)
	if (locale === "tr") return tr_common_term_ranger_station(inputs)
	if (locale === "zh") return zh_common_term_ranger_station(inputs)
	if (locale === "ja") return ja_common_term_ranger_station(inputs)
	return en_common_term_ranger_station(inputs)
});
