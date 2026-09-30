/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Markdown_Preview_EmptyInputs */

const en_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The preview appears here as you type.`)
};

const es_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vista previa aparece aquí mientras escribes.`)
};

const de_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Vorschau erscheint hier, während du schreibst.`)
};

const fr_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’aperçu s’affiche ici pendant que vous écrivez.`)
};

const it_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’anteprima appare qui mentre scrivi.`)
};

const nl_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het voorbeeld verschijnt hier terwijl je typt.`)
};

const pl_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podgląd pojawi się tutaj podczas pisania.`)
};

const pt_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A prévia aparece aqui enquanto você digita.`)
};

const ru_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предпросмотр появится здесь, пока вы пишете.`)
};

const sv_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsvisningen visas här medan du skriver.`)
};

const tr_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazarken önizleme burada görünür.`)
};

const zh_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入时预览会显示在这里。`)
};

const ja_upload_markdown_preview_empty = /** @type {(inputs: Upload_Markdown_Preview_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`入力するとここにプレビューが表示されます。`)
};

/**
* | output |
* | --- |
* | "The preview appears here as you type." |
*
* @param {Upload_Markdown_Preview_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_markdown_preview_empty = /** @type {((inputs?: Upload_Markdown_Preview_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_Preview_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_markdown_preview_empty(inputs)
	if (locale === "de") return de_upload_markdown_preview_empty(inputs)
	if (locale === "fr") return fr_upload_markdown_preview_empty(inputs)
	if (locale === "it") return it_upload_markdown_preview_empty(inputs)
	if (locale === "nl") return nl_upload_markdown_preview_empty(inputs)
	if (locale === "pl") return pl_upload_markdown_preview_empty(inputs)
	if (locale === "pt") return pt_upload_markdown_preview_empty(inputs)
	if (locale === "ru") return ru_upload_markdown_preview_empty(inputs)
	if (locale === "sv") return sv_upload_markdown_preview_empty(inputs)
	if (locale === "tr") return tr_upload_markdown_preview_empty(inputs)
	if (locale === "zh") return zh_upload_markdown_preview_empty(inputs)
	if (locale === "ja") return ja_upload_markdown_preview_empty(inputs)
	return en_upload_markdown_preview_empty(inputs)
});
