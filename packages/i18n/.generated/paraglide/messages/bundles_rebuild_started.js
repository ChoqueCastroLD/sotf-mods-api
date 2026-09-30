/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Rebuild_StartedInputs */

const en_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rebuild started.`)
};

const es_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regeneración iniciada.`)
};

const de_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuerstellung gestartet.`)
};

const fr_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régénération lancée.`)
};

const it_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rigenerazione avviata.`)
};

const nl_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw maken gestart.`)
};

const pl_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozpoczęto ponowną budowę.`)
};

const pt_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regeneração iniciada.`)
};

const ru_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пересборка запущена.`)
};

const sv_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ombyggnad startad.`)
};

const tr_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden oluşturma başladı.`)
};

const zh_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已开始重新生成。`)
};

const ja_bundles_rebuild_started = /** @type {(inputs: Bundles_Rebuild_StartedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再生成を開始しました。`)
};

/**
* | output |
* | --- |
* | "Rebuild started." |
*
* @param {Bundles_Rebuild_StartedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_rebuild_started = /** @type {((inputs?: Bundles_Rebuild_StartedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Rebuild_StartedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_rebuild_started(inputs)
	if (locale === "de") return de_bundles_rebuild_started(inputs)
	if (locale === "fr") return fr_bundles_rebuild_started(inputs)
	if (locale === "it") return it_bundles_rebuild_started(inputs)
	if (locale === "nl") return nl_bundles_rebuild_started(inputs)
	if (locale === "pl") return pl_bundles_rebuild_started(inputs)
	if (locale === "pt") return pt_bundles_rebuild_started(inputs)
	if (locale === "ru") return ru_bundles_rebuild_started(inputs)
	if (locale === "sv") return sv_bundles_rebuild_started(inputs)
	if (locale === "tr") return tr_bundles_rebuild_started(inputs)
	if (locale === "zh") return zh_bundles_rebuild_started(inputs)
	if (locale === "ja") return ja_bundles_rebuild_started(inputs)
	return en_bundles_rebuild_started(inputs)
});
