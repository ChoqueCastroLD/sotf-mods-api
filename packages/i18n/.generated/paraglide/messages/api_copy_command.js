/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Copy_CommandInputs */

const en_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy command`)
};

const es_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar comando`)
};

const de_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Befehl kopieren`)
};

const fr_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier la commande`)
};

const it_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia comando`)
};

const nl_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opdracht kopiëren`)
};

const pl_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj polecenie`)
};

const pt_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar comando`)
};

const ru_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать команду`)
};

const sv_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera kommando`)
};

const tr_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komutu kopyala`)
};

const zh_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制命令`)
};

const ja_api_copy_command = /** @type {(inputs: Api_Copy_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コマンドをコピー`)
};

/**
* | output |
* | --- |
* | "Copy command" |
*
* @param {Api_Copy_CommandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_copy_command = /** @type {((inputs?: Api_Copy_CommandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Copy_CommandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_copy_command(inputs)
	if (locale === "de") return de_api_copy_command(inputs)
	if (locale === "fr") return fr_api_copy_command(inputs)
	if (locale === "it") return it_api_copy_command(inputs)
	if (locale === "nl") return nl_api_copy_command(inputs)
	if (locale === "pl") return pl_api_copy_command(inputs)
	if (locale === "pt") return pt_api_copy_command(inputs)
	if (locale === "ru") return ru_api_copy_command(inputs)
	if (locale === "sv") return sv_api_copy_command(inputs)
	if (locale === "tr") return tr_api_copy_command(inputs)
	if (locale === "zh") return zh_api_copy_command(inputs)
	if (locale === "ja") return ja_api_copy_command(inputs)
	return en_api_copy_command(inputs)
});
