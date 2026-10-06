/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drop_Title_BuildInputs */

const en_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop your build .json here`)
};

const es_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta el .json de tu build aquí`)
};

const de_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh deine Build-.json hierher`)
};

const fr_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez le .json de votre build ici`)
};

const it_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina qui il .json della tua build`)
};

const nl_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep je build-.json hierheen`)
};

const pl_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść tutaj plik .json builda`)
};

const pt_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte o .json da sua build aqui`)
};

const ru_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите сюда файл постройки .json`)
};

const sv_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp din bygg-.json här`)
};

const tr_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı .json dosyanı buraya bırak`)
};

const zh_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把建筑 .json 拖到这里`)
};

const ja_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここに建築の .json をドロップ`)
};

/**
* | output |
* | --- |
* | "Drop your build .json here" |
*
* @param {Upload_Drop_Title_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drop_title_build = /** @type {((inputs?: Upload_Drop_Title_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drop_Title_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drop_title_build(inputs)
	if (locale === "de") return de_upload_drop_title_build(inputs)
	if (locale === "fr") return fr_upload_drop_title_build(inputs)
	if (locale === "it") return it_upload_drop_title_build(inputs)
	if (locale === "nl") return nl_upload_drop_title_build(inputs)
	if (locale === "pl") return pl_upload_drop_title_build(inputs)
	if (locale === "pt") return pt_upload_drop_title_build(inputs)
	if (locale === "ru") return ru_upload_drop_title_build(inputs)
	if (locale === "sv") return sv_upload_drop_title_build(inputs)
	if (locale === "tr") return tr_upload_drop_title_build(inputs)
	if (locale === "zh") return zh_upload_drop_title_build(inputs)
	if (locale === "ja") return ja_upload_drop_title_build(inputs)
	return en_upload_drop_title_build(inputs)
});
