/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_Preview_LoadingInputs */

const en_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rendering the preview…`)
};

const es_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generando la vista previa…`)
};

const de_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschau wird erstellt…`)
};

const fr_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Génération de l’aperçu…`)
};

const it_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creazione dell’anteprima…`)
};

const nl_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeld wordt gemaakt…`)
};

const pl_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tworzenie podglądu…`)
};

const pt_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerando a pré-visualização…`)
};

const ru_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готовим предпросмотр…`)
};

const sv_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapar förhandsgranskningen…`)
};

const tr_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önizleme hazırlanıyor…`)
};

const zh_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在生成预览…`)
};

const ja_social_editor_preview_loading = /** @type {(inputs: Social_Editor_Preview_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレビューを作成中…`)
};

/**
* | output |
* | --- |
* | "Rendering the preview…" |
*
* @param {Social_Editor_Preview_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_preview_loading = /** @type {((inputs?: Social_Editor_Preview_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_Preview_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_preview_loading(inputs)
	if (locale === "de") return de_social_editor_preview_loading(inputs)
	if (locale === "fr") return fr_social_editor_preview_loading(inputs)
	if (locale === "it") return it_social_editor_preview_loading(inputs)
	if (locale === "nl") return nl_social_editor_preview_loading(inputs)
	if (locale === "pl") return pl_social_editor_preview_loading(inputs)
	if (locale === "pt") return pt_social_editor_preview_loading(inputs)
	if (locale === "ru") return ru_social_editor_preview_loading(inputs)
	if (locale === "sv") return sv_social_editor_preview_loading(inputs)
	if (locale === "tr") return tr_social_editor_preview_loading(inputs)
	if (locale === "zh") return zh_social_editor_preview_loading(inputs)
	if (locale === "ja") return ja_social_editor_preview_loading(inputs)
	return en_social_editor_preview_loading(inputs)
});
