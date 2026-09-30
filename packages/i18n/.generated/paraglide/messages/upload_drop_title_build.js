/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drop_Title_BuildInputs */

const en_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop your blueprint .json here`)
};

const es_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta tu plano .json aquí`)
};

const de_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zieh deine Bauplan-.json hierher`)
};

const fr_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez votre plan .json ici`)
};

const it_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina qui il tuo progetto .json`)
};

const nl_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep je bouwtekening-.json hierheen`)
};

const pl_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść tutaj plan .json`)
};

const pt_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte sua planta .json aqui`)
};

const ru_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите сюда чертёж .json`)
};

const sv_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp din ritnings-.json här`)
};

const tr_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan .json dosyanı buraya bırak`)
};

const zh_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把蓝图 .json 拖到这里`)
};

const ja_upload_drop_title_build = /** @type {(inputs: Upload_Drop_Title_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここに設計図 .json をドロップ`)
};

/**
* | output |
* | --- |
* | "Drop your blueprint .json here" |
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
