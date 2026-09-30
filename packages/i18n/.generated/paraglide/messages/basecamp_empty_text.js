/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Empty_TextInputs */

const en_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish your first mod or build and this is where you will follow its downloads, reviews and field reports.`)
};

const es_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica tu primer mod o build y aquí seguirás sus descargas, reseñas y reportes de campo.`)
};

const de_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentliche deinen ersten Mod oder Build und verfolge hier Downloads, Bewertungen und Feldberichte.`)
};

const fr_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez votre premier mod ou build et suivez ici ses téléchargements, avis et rapports de terrain.`)
};

const it_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica la tua prima mod o build e qui ne seguirai download, recensioni e rapporti sul campo.`)
};

const nl_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceer je eerste mod of build en volg hier de downloads, reviews en veldrapporten.`)
};

const pl_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj swój pierwszy mod lub build, a tutaj będziesz śledzić pobrania, recenzje i raporty terenowe.`)
};

const pt_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publique seu primeiro mod ou build e acompanhe aqui os downloads, avaliações e relatórios de campo.`)
};

const ru_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликуйте первый мод или постройку, и здесь вы будете следить за загрузками, отзывами и полевыми отчётами.`)
};

const sv_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera din första mod eller ditt första bygge och följ här nedladdningar, recensioner och fältrapporter.`)
};

const tr_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu ya da yapını yayınla; indirmeleri, incelemeleri ve saha raporlarını burada takip et.`)
};

const zh_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布你的第一个模组或建筑，就能在这里跟踪下载量、评价和实地报告。`)
};

const ja_basecamp_empty_text = /** @type {(inputs: Basecamp_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の MOD や建築を公開すると、ダウンロード、レビュー、フィールドレポートをここで追えます。`)
};

/**
* | output |
* | --- |
* | "Publish your first mod or build and this is where you will follow its downloads, reviews and field reports." |
*
* @param {Basecamp_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_empty_text = /** @type {((inputs?: Basecamp_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_empty_text(inputs)
	if (locale === "de") return de_basecamp_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_empty_text(inputs)
	if (locale === "it") return it_basecamp_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_empty_text(inputs)
	return en_basecamp_empty_text(inputs)
});
