/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Viewer_No_WebglInputs */

const en_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your browser cannot show the 3D view, so the top-down preview stays.`)
};

const es_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu navegador no puede mostrar la vista 3D, así que se mantiene la vista cenital.`)
};

const de_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Browser kann die 3D-Ansicht nicht darstellen, deshalb bleibt die Ansicht von oben.`)
};

const fr_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ton navigateur ne peut pas afficher la vue 3D, la vue de dessus reste affichée.`)
};

const it_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo browser non può mostrare la vista 3D, quindi resta la vista dall'alto.`)
};

const nl_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je browser kan de 3D-weergave niet tonen, dus het bovenaanzicht blijft staan.`)
};

const pl_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja przeglądarka nie potrafi pokazać widoku 3D, więc zostaje widok z góry.`)
};

const pt_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O teu navegador não consegue mostrar a vista 3D, por isso fica a vista de cima.`)
};

const ru_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш браузер не может показать 3D, поэтому остаётся вид сверху.`)
};

const sv_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din webbläsare kan inte visa 3D-vyn, så vyn uppifrån ligger kvar.`)
};

const tr_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarayıcın 3B görünümü gösteremiyor, bu yüzden yukarıdan görünüm kalıyor.`)
};

const zh_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的浏览器无法显示 3D 视图，因此保留俯视图。`)
};

const ja_viewer_no_webgl = /** @type {(inputs: Viewer_No_WebglInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お使いのブラウザでは 3D ビューを表示できないため、上からの表示のままです。`)
};

/**
* | output |
* | --- |
* | "Your browser cannot show the 3D view, so the top-down preview stays." |
*
* @param {Viewer_No_WebglInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_no_webgl = /** @type {((inputs?: Viewer_No_WebglInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_No_WebglInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_no_webgl(inputs)
	if (locale === "de") return de_viewer_no_webgl(inputs)
	if (locale === "fr") return fr_viewer_no_webgl(inputs)
	if (locale === "it") return it_viewer_no_webgl(inputs)
	if (locale === "nl") return nl_viewer_no_webgl(inputs)
	if (locale === "pl") return pl_viewer_no_webgl(inputs)
	if (locale === "pt") return pt_viewer_no_webgl(inputs)
	if (locale === "ru") return ru_viewer_no_webgl(inputs)
	if (locale === "sv") return sv_viewer_no_webgl(inputs)
	if (locale === "tr") return tr_viewer_no_webgl(inputs)
	if (locale === "zh") return zh_viewer_no_webgl(inputs)
	if (locale === "ja") return ja_viewer_no_webgl(inputs)
	return en_viewer_no_webgl(inputs)
});
