/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Hint_RunInputs */

const en_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run`)
};

const es_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar`)
};

const de_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausführen`)
};

const fr_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lancer`)
};

const it_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esegui`)
};

const nl_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitvoeren`)
};

const pl_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uruchom`)
};

const pt_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar`)
};

const ru_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполнить`)
};

const sv_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kör`)
};

const tr_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalıştır`)
};

const zh_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`执行`)
};

const ja_cmdk_hint_run = /** @type {(inputs: Cmdk_Hint_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行`)
};

/**
* | output |
* | --- |
* | "Run" |
*
* @param {Cmdk_Hint_RunInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_hint_run = /** @type {((inputs?: Cmdk_Hint_RunInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Hint_RunInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_hint_run(inputs)
	if (locale === "de") return de_cmdk_hint_run(inputs)
	if (locale === "fr") return fr_cmdk_hint_run(inputs)
	if (locale === "it") return it_cmdk_hint_run(inputs)
	if (locale === "nl") return nl_cmdk_hint_run(inputs)
	if (locale === "pl") return pl_cmdk_hint_run(inputs)
	if (locale === "pt") return pt_cmdk_hint_run(inputs)
	if (locale === "ru") return ru_cmdk_hint_run(inputs)
	if (locale === "sv") return sv_cmdk_hint_run(inputs)
	if (locale === "tr") return tr_cmdk_hint_run(inputs)
	if (locale === "zh") return zh_cmdk_hint_run(inputs)
	if (locale === "ja") return ja_cmdk_hint_run(inputs)
	return en_cmdk_hint_run(inputs)
});
