/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Viewer_Canvas_LabelInputs */

const en_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Interactive 3D view of ${i?.name}`)
};

const es_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista 3D interactiva de ${i?.name}`)
};

const de_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Interaktive 3D-Ansicht von ${i?.name}`)
};

const fr_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vue 3D interactive de ${i?.name}`)
};

const it_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista 3D interattiva di ${i?.name}`)
};

const nl_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Interactieve 3D-weergave van ${i?.name}`)
};

const pl_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Interaktywny widok 3D: ${i?.name}`)
};

const pt_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista 3D interativa de ${i?.name}`)
};

const ru_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Интерактивный 3D-вид: ${i?.name}`)
};

const sv_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Interaktiv 3D-vy av ${i?.name}`)
};

const tr_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için etkileşimli 3B görünüm`)
};

const zh_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的交互式 3D 视图`)
};

const ja_viewer_canvas_label = /** @type {(inputs: Viewer_Canvas_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のインタラクティブ 3D ビュー`)
};

/**
* | output |
* | --- |
* | "Interactive 3D view of {name}" |
*
* @param {Viewer_Canvas_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_canvas_label = /** @type {((inputs: Viewer_Canvas_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_Canvas_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_canvas_label(inputs)
	if (locale === "de") return de_viewer_canvas_label(inputs)
	if (locale === "fr") return fr_viewer_canvas_label(inputs)
	if (locale === "it") return it_viewer_canvas_label(inputs)
	if (locale === "nl") return nl_viewer_canvas_label(inputs)
	if (locale === "pl") return pl_viewer_canvas_label(inputs)
	if (locale === "pt") return pt_viewer_canvas_label(inputs)
	if (locale === "ru") return ru_viewer_canvas_label(inputs)
	if (locale === "sv") return sv_viewer_canvas_label(inputs)
	if (locale === "tr") return tr_viewer_canvas_label(inputs)
	if (locale === "zh") return zh_viewer_canvas_label(inputs)
	if (locale === "ja") return ja_viewer_canvas_label(inputs)
	return en_viewer_canvas_label(inputs)
});
