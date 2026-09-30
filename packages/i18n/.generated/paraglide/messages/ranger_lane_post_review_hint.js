/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Post_Review_HintInputs */

const en_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions already published without a human look: review them within 72 hours.`)
};

const es_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones ya publicadas sin revisión humana: revísalas en menos de 72 horas.`)
};

const de_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereits veröffentlichte Versionen ohne menschliche Prüfung: innerhalb von 72 Stunden prüfen.`)
};

const fr_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions déjà publiées sans regard humain : à revoir sous 72 heures.`)
};

const it_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni già pubblicate senza uno sguardo umano: rivedile entro 72 ore.`)
};

const nl_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al gepubliceerde versies zonder menselijke blik: controleer ze binnen 72 uur.`)
};

const pl_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje opublikowane bez ludzkiego przeglądu: sprawdź je w ciągu 72 godzin.`)
};

const pt_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões já publicadas sem olhar humano: revise em até 72 horas.`)
};

const ru_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии, опубликованные без проверки человеком: проверьте их в течение 72 часов.`)
};

const sv_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redan publicerade versioner utan mänsklig granskning: granska dem inom 72 timmar.`)
};

const tr_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnsan gözünden geçmeden yayımlanmış sürümler: 72 saat içinde inceleyin.`)
};

const zh_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未经人工审核就已发布的版本：请在 72 小时内审核。`)
};

const ja_ranger_lane_post_review_hint = /** @type {(inputs: Ranger_Lane_Post_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人の目を通さずに公開済みのバージョン：72 時間以内にレビューしてください。`)
};

/**
* | output |
* | --- |
* | "Versions already published without a human look: review them within 72 hours." |
*
* @param {Ranger_Lane_Post_Review_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_post_review_hint = /** @type {((inputs?: Ranger_Lane_Post_Review_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Post_Review_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_post_review_hint(inputs)
	if (locale === "de") return de_ranger_lane_post_review_hint(inputs)
	if (locale === "fr") return fr_ranger_lane_post_review_hint(inputs)
	if (locale === "it") return it_ranger_lane_post_review_hint(inputs)
	if (locale === "nl") return nl_ranger_lane_post_review_hint(inputs)
	if (locale === "pl") return pl_ranger_lane_post_review_hint(inputs)
	if (locale === "pt") return pt_ranger_lane_post_review_hint(inputs)
	if (locale === "ru") return ru_ranger_lane_post_review_hint(inputs)
	if (locale === "sv") return sv_ranger_lane_post_review_hint(inputs)
	if (locale === "tr") return tr_ranger_lane_post_review_hint(inputs)
	if (locale === "zh") return zh_ranger_lane_post_review_hint(inputs)
	if (locale === "ja") return ja_ranger_lane_post_review_hint(inputs)
	return en_ranger_lane_post_review_hint(inputs)
});
