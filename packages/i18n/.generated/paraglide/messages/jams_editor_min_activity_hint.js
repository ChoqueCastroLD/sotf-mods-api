/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Min_Activity_HintInputs */

const en_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments, reviews and favorites the voter must have. Use 0 to allow anyone.`)
};

const es_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios, reseñas y favoritos que debe tener quien vota. Usa 0 para permitir a cualquiera.`)
};

const de_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare, Bewertungen und Favoriten, die ein Wähler haben muss. Mit 0 darf jeder abstimmen.`)
};

const fr_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires, avis et favoris requis pour voter. Mettez 0 pour autoriser tout le monde.`)
};

const it_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti, recensioni e preferiti richiesti a chi vota. Usa 0 per consentire a chiunque.`)
};

const nl_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties, beoordelingen en favorieten die een stemmer moet hebben. Gebruik 0 voor iedereen.`)
};

const pl_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze, recenzje i ulubione, które musi mieć głosujący. 0 oznacza brak wymagań.`)
};

const pt_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários, avaliações e favoritos que quem vota precisa ter. Use 0 para permitir qualquer pessoa.`)
};

const ru_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сколько комментариев, отзывов и избранного нужно иметь для голосования. 0 значит без ограничений.`)
};

const sv_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer, recensioner och favoriter som krävs för att rösta. Använd 0 för att tillåta alla.`)
};

const tr_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy verenin sahip olması gereken yorum, inceleme ve favori sayısı. Herkese izin vermek için 0 yazın.`)
};

const zh_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票者需要具备的评论、评价和收藏总数。填 0 表示不限制。`)
};

const ja_jams_editor_min_activity_hint = /** @type {(inputs: Jams_Editor_Min_Activity_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票者に必要なコメント、レビュー、お気に入りの合計数です。0 なら誰でも投票できます。`)
};

/**
* | output |
* | --- |
* | "Comments, reviews and favorites the voter must have. Use 0 to allow anyone." |
*
* @param {Jams_Editor_Min_Activity_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_min_activity_hint = /** @type {((inputs?: Jams_Editor_Min_Activity_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_Activity_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_min_activity_hint(inputs)
	if (locale === "de") return de_jams_editor_min_activity_hint(inputs)
	if (locale === "fr") return fr_jams_editor_min_activity_hint(inputs)
	if (locale === "it") return it_jams_editor_min_activity_hint(inputs)
	if (locale === "nl") return nl_jams_editor_min_activity_hint(inputs)
	if (locale === "pl") return pl_jams_editor_min_activity_hint(inputs)
	if (locale === "pt") return pt_jams_editor_min_activity_hint(inputs)
	if (locale === "ru") return ru_jams_editor_min_activity_hint(inputs)
	if (locale === "sv") return sv_jams_editor_min_activity_hint(inputs)
	if (locale === "tr") return tr_jams_editor_min_activity_hint(inputs)
	if (locale === "zh") return zh_jams_editor_min_activity_hint(inputs)
	if (locale === "ja") return ja_jams_editor_min_activity_hint(inputs)
	return en_jams_editor_min_activity_hint(inputs)
});
