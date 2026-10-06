/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Reviews_EmptyInputs */

const en_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reviews yet. Tried it? Tell other players how it went.`)
};

const es_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reseñas. ¿La has probado? Cuéntales a otros jugadores qué tal.`)
};

const de_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Bewertungen. Schon ausprobiert? Erzähl anderen Spielern, wie es lief.`)
};

const fr_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore d’avis. Vous l’avez essayée ? Dites aux autres joueurs comment ça s’est passé.`)
};

const it_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna recensione. L’hai provata? Racconta agli altri giocatori com’è andata.`)
};

const nl_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reviews. Heb je hem geprobeerd? Vertel andere spelers hoe het ging.`)
};

const pl_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak recenzji. Wypróbowałeś go? Opowiedz innym graczom, jak poszło.`)
};

const pt_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há avaliações. Experimentou? Conte aos outros jogadores como foi.`)
};

const ru_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывов пока нет. Уже попробовали? Расскажите другим игрокам, как всё прошло.`)
};

const sv_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga recensioner än. Har du provat det? Berätta för andra spelare hur det gick.`)
};

const tr_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz inceleme yok. Denedin mi? Diğer oyunculara nasıl gittiğini anlat.`)
};

const zh_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评价。试过了吗？告诉其他玩家效果如何。`)
};

const ja_builds_reviews_empty = /** @type {(inputs: Builds_Reviews_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューはまだありません。試してみましたか？ほかのプレイヤーに感想を伝えましょう。`)
};

/**
* | output |
* | --- |
* | "No reviews yet. Tried it? Tell other players how it went." |
*
* @param {Builds_Reviews_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_reviews_empty = /** @type {((inputs?: Builds_Reviews_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Reviews_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_reviews_empty(inputs)
	if (locale === "de") return de_builds_reviews_empty(inputs)
	if (locale === "fr") return fr_builds_reviews_empty(inputs)
	if (locale === "it") return it_builds_reviews_empty(inputs)
	if (locale === "nl") return nl_builds_reviews_empty(inputs)
	if (locale === "pl") return pl_builds_reviews_empty(inputs)
	if (locale === "pt") return pt_builds_reviews_empty(inputs)
	if (locale === "ru") return ru_builds_reviews_empty(inputs)
	if (locale === "sv") return sv_builds_reviews_empty(inputs)
	if (locale === "tr") return tr_builds_reviews_empty(inputs)
	if (locale === "zh") return zh_builds_reviews_empty(inputs)
	if (locale === "ja") return ja_builds_reviews_empty(inputs)
	return en_builds_reviews_empty(inputs)
});
