/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hall_HintInputs */

const en_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The most downloaded mods of all time`)
};

const es_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods más descargados de todos los tiempos`)
};

const de_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die meistgeladenen Mods aller Zeiten`)
};

const fr_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods les plus téléchargés de tous les temps`)
};

const it_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le mod più scaricate di sempre`)
};

const nl_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De meest gedownloade mods aller tijden`)
};

const pl_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane mody wszech czasów`)
};

const pt_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods mais baixados de todos os tempos`)
};

const ru_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самые скачиваемые моды за всё время`)
};

const sv_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mest nedladdade moddarna genom tiderna`)
};

const tr_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm zamanların en çok indirilen modları`)
};

const zh_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有史以来下载量最高的模组`)
};

const ja_landing_hall_hint = /** @type {(inputs: Landing_Hall_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`歴代ダウンロード数トップのMOD`)
};

/**
* | output |
* | --- |
* | "The most downloaded mods of all time" |
*
* @param {Landing_Hall_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hall_hint = /** @type {((inputs?: Landing_Hall_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hall_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hall_hint(inputs)
	if (locale === "de") return de_landing_hall_hint(inputs)
	if (locale === "fr") return fr_landing_hall_hint(inputs)
	if (locale === "it") return it_landing_hall_hint(inputs)
	if (locale === "nl") return nl_landing_hall_hint(inputs)
	if (locale === "pl") return pl_landing_hall_hint(inputs)
	if (locale === "pt") return pt_landing_hall_hint(inputs)
	if (locale === "ru") return ru_landing_hall_hint(inputs)
	if (locale === "sv") return sv_landing_hall_hint(inputs)
	if (locale === "tr") return tr_landing_hall_hint(inputs)
	if (locale === "zh") return zh_landing_hall_hint(inputs)
	if (locale === "ja") return ja_landing_hall_hint(inputs)
	return en_landing_hall_hint(inputs)
});
