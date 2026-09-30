/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_Legends_HintInputs */

const en_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded creators of all time`)
};

const es_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los creadores más descargados de todos los tiempos`)
};

const de_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die meistgeladenen Creator aller Zeiten`)
};

const fr_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les créateurs les plus téléchargés de tous les temps`)
};

const it_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I creator più scaricati di sempre`)
};

const nl_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De meest gedownloade makers aller tijden`)
};

const pl_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierani twórcy wszech czasów`)
};

const pt_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os criadores mais baixados de todos os tempos`)
};

const ru_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самые скачиваемые авторы за всё время`)
};

const sv_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mest nedladdade skaparna genom tiderna`)
};

const tr_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm zamanların en çok indirilen geliştiricileri`)
};

const zh_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`历史下载量最高的创作者`)
};

const ja_landing_creators_legends_hint = /** @type {(inputs: Landing_Creators_Legends_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`累計ダウンロード数が多いクリエイター`)
};

/**
* | output |
* | --- |
* | "Most downloaded creators of all time" |
*
* @param {Landing_Creators_Legends_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_legends_hint = /** @type {((inputs?: Landing_Creators_Legends_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_Legends_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_legends_hint(inputs)
	if (locale === "de") return de_landing_creators_legends_hint(inputs)
	if (locale === "fr") return fr_landing_creators_legends_hint(inputs)
	if (locale === "it") return it_landing_creators_legends_hint(inputs)
	if (locale === "nl") return nl_landing_creators_legends_hint(inputs)
	if (locale === "pl") return pl_landing_creators_legends_hint(inputs)
	if (locale === "pt") return pt_landing_creators_legends_hint(inputs)
	if (locale === "ru") return ru_landing_creators_legends_hint(inputs)
	if (locale === "sv") return sv_landing_creators_legends_hint(inputs)
	if (locale === "tr") return tr_landing_creators_legends_hint(inputs)
	if (locale === "zh") return zh_landing_creators_legends_hint(inputs)
	if (locale === "ja") return ja_landing_creators_legends_hint(inputs)
	return en_landing_creators_legends_hint(inputs)
});
