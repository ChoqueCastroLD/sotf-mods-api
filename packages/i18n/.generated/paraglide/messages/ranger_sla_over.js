/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ hours: NonNullable<unknown> }} Ranger_Sla_OverInputs */

const en_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Over ${i?.hours} h`)
};

const es_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Más de ${i?.hours} h`)
};

const de_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Über ${i?.hours} h`)
};

const fr_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plus de ${i?.hours} h`)
};

const it_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oltre ${i?.hours} h`)
};

const nl_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meer dan ${i?.hours} u`)
};

const pl_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ponad ${i?.hours} h`)
};

const pt_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mais de ${i?.hours} h`)
};

const ru_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Больше ${i?.hours} ч`)
};

const sv_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Över ${i?.hours} h`)
};

const tr_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} saati aşan`)
};

const zh_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`超过 ${i?.hours} 小时`)
};

const ja_ranger_sla_over = /** @type {(inputs: Ranger_Sla_OverInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} 時間超過`)
};

/**
* | output |
* | --- |
* | "Over {hours} h" |
*
* @param {Ranger_Sla_OverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sla_over = /** @type {((inputs: Ranger_Sla_OverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_OverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sla_over(inputs)
	if (locale === "de") return de_ranger_sla_over(inputs)
	if (locale === "fr") return fr_ranger_sla_over(inputs)
	if (locale === "it") return it_ranger_sla_over(inputs)
	if (locale === "nl") return nl_ranger_sla_over(inputs)
	if (locale === "pl") return pl_ranger_sla_over(inputs)
	if (locale === "pt") return pt_ranger_sla_over(inputs)
	if (locale === "ru") return ru_ranger_sla_over(inputs)
	if (locale === "sv") return sv_ranger_sla_over(inputs)
	if (locale === "tr") return tr_ranger_sla_over(inputs)
	if (locale === "zh") return zh_ranger_sla_over(inputs)
	if (locale === "ja") return ja_ranger_sla_over(inputs)
	return en_ranger_sla_over(inputs)
});
