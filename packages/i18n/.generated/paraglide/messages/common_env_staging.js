/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Env_StagingInputs */

const en_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: changes may be lost.`)
};

const es_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: los cambios pueden perderse.`)
};

const de_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: Änderungen können verloren gehen.`)
};

const fr_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bêta : les modifications peuvent être perdues.`)
};

const it_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: le modifiche potrebbero andare perse.`)
};

const nl_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bèta: wijzigingen kunnen verloren gaan.`)
};

const pl_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: zmiany mogą zostać utracone.`)
};

const pt_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: as alterações podem ser perdidas.`)
};

const ru_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бета: изменения могут быть потеряны.`)
};

const sv_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: ändringar kan gå förlorade.`)
};

const tr_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta: değişiklikler kaybolabilir.`)
};

const zh_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试版：更改可能会丢失。`)
};

const ja_common_env_staging = /** @type {(inputs: Common_Env_StagingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベータ版：変更は失われる可能性があります。`)
};

/**
* | output |
* | --- |
* | "Beta: changes may be lost." |
*
* @param {Common_Env_StagingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_env_staging = /** @type {((inputs?: Common_Env_StagingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Env_StagingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_env_staging(inputs)
	if (locale === "de") return de_common_env_staging(inputs)
	if (locale === "fr") return fr_common_env_staging(inputs)
	if (locale === "it") return it_common_env_staging(inputs)
	if (locale === "nl") return nl_common_env_staging(inputs)
	if (locale === "pl") return pl_common_env_staging(inputs)
	if (locale === "pt") return pt_common_env_staging(inputs)
	if (locale === "ru") return ru_common_env_staging(inputs)
	if (locale === "sv") return sv_common_env_staging(inputs)
	if (locale === "tr") return tr_common_env_staging(inputs)
	if (locale === "zh") return zh_common_env_staging(inputs)
	if (locale === "ja") return ja_common_env_staging(inputs)
	return en_common_env_staging(inputs)
});
