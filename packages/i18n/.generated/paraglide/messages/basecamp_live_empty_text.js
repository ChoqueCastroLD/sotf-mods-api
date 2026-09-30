/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_Empty_TextInputs */

const en_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, reviews, comments and field reports on your mods show up here as they happen.`)
};

const es_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las descargas, reseñas, comentarios y reportes de campo de tus mods aparecen aquí según ocurren.`)
};

const de_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, Bewertungen, Kommentare und Feldberichte zu deinen Mods erscheinen hier, sobald sie passieren.`)
};

const fr_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les téléchargements, avis, commentaires et rapports de terrain de vos mods s’affichent ici en temps réel.`)
};

const it_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download, recensioni, commenti e rapporti sul campo delle tue mod compaiono qui mentre succedono.`)
};

const nl_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, reviews, reacties en veldrapporten van je mods verschijnen hier zodra ze gebeuren.`)
};

const pl_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania, recenzje, komentarze i raporty terenowe twoich modów pojawiają się tu na bieżąco.`)
};

const pt_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, avaliações, comentários e relatórios de campo dos seus mods aparecem aqui assim que acontecem.`)
};

const ru_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки, отзывы, комментарии и полевые отчёты о ваших модах появляются здесь в реальном времени.`)
};

const sv_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar, recensioner, kommentarer och fältrapporter för dina moddar visas här när de händer.`)
};

const tr_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarının indirmeleri, incelemeleri, yorumları ve saha raporları gerçekleştikçe burada görünür.`)
};

const zh_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组的下载、评价、评论和实地报告会实时显示在这里。`)
};

const ja_basecamp_live_empty_text = /** @type {(inputs: Basecamp_Live_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のダウンロード、レビュー、コメント、フィールドレポートが発生するとここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Downloads, reviews, comments and field reports on your mods show up here as they happen." |
*
* @param {Basecamp_Live_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_empty_text = /** @type {((inputs?: Basecamp_Live_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_empty_text(inputs)
	if (locale === "de") return de_basecamp_live_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_live_empty_text(inputs)
	if (locale === "it") return it_basecamp_live_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_live_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_live_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_live_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_live_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_live_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_live_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_live_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_live_empty_text(inputs)
	return en_basecamp_live_empty_text(inputs)
});
