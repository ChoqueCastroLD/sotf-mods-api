/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Stage_CurrentInputs */

const en_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current stage`)
};

const es_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etapa actual`)
};

const de_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelle Phase`)
};

const fr_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape en cours`)
};

const it_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fase attuale`)
};

const nl_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige fase`)
};

const pl_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bieżący etap`)
};

const pt_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etapa atual`)
};

const ru_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущий этап`)
};

const sv_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pågående steg`)
};

const tr_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut aşama`)
};

const zh_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前阶段`)
};

const ja_jams_stage_current = /** @type {(inputs: Jams_Stage_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のステージ`)
};

/**
* | output |
* | --- |
* | "Current stage" |
*
* @param {Jams_Stage_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_stage_current = /** @type {((inputs?: Jams_Stage_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Stage_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_stage_current(inputs)
	if (locale === "de") return de_jams_stage_current(inputs)
	if (locale === "fr") return fr_jams_stage_current(inputs)
	if (locale === "it") return it_jams_stage_current(inputs)
	if (locale === "nl") return nl_jams_stage_current(inputs)
	if (locale === "pl") return pl_jams_stage_current(inputs)
	if (locale === "pt") return pt_jams_stage_current(inputs)
	if (locale === "ru") return ru_jams_stage_current(inputs)
	if (locale === "sv") return sv_jams_stage_current(inputs)
	if (locale === "tr") return tr_jams_stage_current(inputs)
	if (locale === "zh") return zh_jams_stage_current(inputs)
	if (locale === "ja") return ja_jams_stage_current(inputs)
	return en_jams_stage_current(inputs)
});
