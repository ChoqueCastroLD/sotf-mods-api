/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, pieces: NonNullable<unknown>, width: NonNullable<unknown>, depth: NonNullable<unknown>, height: NonNullable<unknown> }} Viewer_AltInputs */

const en_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Top-down preview of ${i?.name}: ${i?.pieces} pieces, ${i?.width} by ${i?.depth} by ${i?.height} metres.`)
};

const es_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista cenital de ${i?.name}: ${i?.pieces} piezas, ${i?.width} por ${i?.depth} por ${i?.height} metros.`)
};

const de_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ansicht von oben auf ${i?.name}: ${i?.pieces} Teile, ${i?.width} mal ${i?.depth} mal ${i?.height} Meter.`)
};

const fr_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vue de dessus de ${i?.name} : ${i?.pieces} pièces, ${i?.width} sur ${i?.depth} sur ${i?.height} mètres.`)
};

const it_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista dall'alto di ${i?.name}: ${i?.pieces} pezzi, ${i?.width} per ${i?.depth} per ${i?.height} metri.`)
};

const nl_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bovenaanzicht van ${i?.name}: ${i?.pieces} stukken, ${i?.width} bij ${i?.depth} bij ${i?.height} meter.`)
};

const pl_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Widok z góry na ${i?.name}: ${i?.pieces} elementów, ${i?.width} na ${i?.depth} na ${i?.height} metra.`)
};

const pt_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vista de cima de ${i?.name}: ${i?.pieces} peças, ${i?.width} por ${i?.depth} por ${i?.height} metros.`)
};

const ru_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вид сверху на ${i?.name}: деталей ${i?.pieces}, ${i?.width} на ${i?.depth} на ${i?.height} м.`)
};

const sv_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vy uppifrån av ${i?.name}: ${i?.pieces} delar, ${i?.width} gånger ${i?.depth} gånger ${i?.height} meter.`)
};

const tr_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yukarıdan önizleme: ${i?.pieces} parça, ${i?.width} x ${i?.depth} x ${i?.height} metre.`)
};

const zh_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的俯视预览：${i?.pieces} 个构件，${i?.width} × ${i?.depth} × ${i?.height} 米。`)
};

const ja_viewer_alt = /** @type {(inputs: Viewer_AltInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の上からのプレビュー：${i?.pieces} 個のパーツ、${i?.width} × ${i?.depth} × ${i?.height} メートル。`)
};

/**
* | output |
* | --- |
* | "Top-down preview of {name}: {pieces} pieces, {width} by {depth} by {height} metres." |
*
* @param {Viewer_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_alt = /** @type {((inputs: Viewer_AltInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_AltInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_alt(inputs)
	if (locale === "de") return de_viewer_alt(inputs)
	if (locale === "fr") return fr_viewer_alt(inputs)
	if (locale === "it") return it_viewer_alt(inputs)
	if (locale === "nl") return nl_viewer_alt(inputs)
	if (locale === "pl") return pl_viewer_alt(inputs)
	if (locale === "pt") return pt_viewer_alt(inputs)
	if (locale === "ru") return ru_viewer_alt(inputs)
	if (locale === "sv") return sv_viewer_alt(inputs)
	if (locale === "tr") return tr_viewer_alt(inputs)
	if (locale === "zh") return zh_viewer_alt(inputs)
	if (locale === "ja") return ja_viewer_alt(inputs)
	return en_viewer_alt(inputs)
});
