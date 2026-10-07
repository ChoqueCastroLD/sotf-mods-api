/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Activity_Empty_TextInputs */

const en_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New reviews, comments and status changes on your mods appear here.`)
};

const es_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aquí aparecen las nuevas reseñas, comentarios y cambios de estado de tus mods.`)
};

const de_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Bewertungen, Kommentare und Statusänderungen deiner Mods erscheinen hier.`)
};

const fr_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les nouveaux avis, commentaires et changements de statut de vos mods apparaissent ici.`)
};

const it_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui compaiono le nuove recensioni, i commenti e i cambi di stato dei tuoi mod.`)
};

const nl_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe reviews, reacties en statuswijzigingen van je mods verschijnen hier.`)
};

const pl_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutaj pojawią się nowe recenzje, komentarze i zmiany statusu twoich modów.`)
};

const pt_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novas avaliações, comentários e mudanças de status dos seus mods aparecem aqui.`)
};

const ru_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь появятся новые отзывы, комментарии и смены статуса ваших модов.`)
};

const sv_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya recensioner, kommentarer och statusändringar för dina moddar visas här.`)
};

const tr_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarınızdaki yeni değerlendirmeler, yorumlar ve durum değişiklikleri burada görünür.`)
};

const zh_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组收到的新评价、评论和状态变更会显示在这里。`)
};

const ja_basecamp_activity_empty_text = /** @type {(inputs: Basecamp_Activity_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD への新しいレビューやコメント、ステータスの変更がここに表示されます。`)
};

/**
* | output |
* | --- |
* | "New reviews, comments and status changes on your mods appear here." |
*
* @param {Basecamp_Activity_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_activity_empty_text = /** @type {((inputs?: Basecamp_Activity_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Activity_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_activity_empty_text(inputs)
	if (locale === "de") return de_basecamp_activity_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_activity_empty_text(inputs)
	if (locale === "it") return it_basecamp_activity_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_activity_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_activity_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_activity_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_activity_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_activity_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_activity_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_activity_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_activity_empty_text(inputs)
	return en_basecamp_activity_empty_text(inputs)
});
