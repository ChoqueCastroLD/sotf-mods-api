/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_CaptionInputs */

const en_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases, comments, reviews and field reports per day (UTC).`)
};

const es_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicaciones, comentarios, reseñas y reportes de campo por día (UTC).`)
};

const de_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichungen, Kommentare, Bewertungen und Feldberichte pro Tag (UTC).`)
};

const fr_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publications, commentaires, avis et rapports de terrain par jour (UTC).`)
};

const it_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicazioni, commenti, recensioni e rapporti sul campo al giorno (UTC).`)
};

const nl_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Releases, reacties, reviews en veldrapporten per dag (UTC).`)
};

const pl_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydania, komentarze, recenzje i raporty terenowe dziennie (UTC).`)
};

const pt_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicações, comentários, avaliações e relatórios de campo por dia (UTC).`)
};

const ru_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Релизы, комментарии, отзывы и полевые отчёты по дням (UTC).`)
};

const sv_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp, kommentarer, recensioner och fältrapporter per dag (UTC).`)
};

const tr_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük yayınlar, yorumlar, incelemeler ve saha raporları (UTC).`)
};

const zh_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日发布、评论、评价和实地报告（UTC）。`)
};

const ja_profile_activity_caption = /** @type {(inputs: Profile_Activity_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 日ごとのリリース、コメント、レビュー、フィールドレポート（UTC）。`)
};

/**
* | output |
* | --- |
* | "Releases, comments, reviews and field reports per day (UTC)." |
*
* @param {Profile_Activity_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_caption = /** @type {((inputs?: Profile_Activity_CaptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_CaptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_caption(inputs)
	if (locale === "de") return de_profile_activity_caption(inputs)
	if (locale === "fr") return fr_profile_activity_caption(inputs)
	if (locale === "it") return it_profile_activity_caption(inputs)
	if (locale === "nl") return nl_profile_activity_caption(inputs)
	if (locale === "pl") return pl_profile_activity_caption(inputs)
	if (locale === "pt") return pt_profile_activity_caption(inputs)
	if (locale === "ru") return ru_profile_activity_caption(inputs)
	if (locale === "sv") return sv_profile_activity_caption(inputs)
	if (locale === "tr") return tr_profile_activity_caption(inputs)
	if (locale === "zh") return zh_profile_activity_caption(inputs)
	if (locale === "ja") return ja_profile_activity_caption(inputs)
	return en_profile_activity_caption(inputs)
});
