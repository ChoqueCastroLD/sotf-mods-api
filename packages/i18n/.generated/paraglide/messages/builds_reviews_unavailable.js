/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Reviews_UnavailableInputs */

const en_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reviews didn’t load this time. Reload the page to try again.`)
};

const es_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las reseñas no se han cargado esta vez. Recarga la página para intentarlo de nuevo.`)
};

const de_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Bewertungen wurden diesmal nicht geladen. Lade die Seite neu, um es erneut zu versuchen.`)
};

const fr_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les avis ne se sont pas chargés cette fois. Rechargez la page pour réessayer.`)
};

const it_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le recensioni non si sono caricate stavolta. Ricarica la pagina per riprovare.`)
};

const nl_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De reviews zijn deze keer niet geladen. Laad de pagina opnieuw om het nog eens te proberen.`)
};

const pl_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tym razem recenzje się nie wczytały. Odśwież stronę, aby spróbować ponownie.`)
};

const pt_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As avaliações não carregaram desta vez. Recarregue a página para tentar de novo.`)
};

const ru_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзывы в этот раз не загрузились. Обновите страницу, чтобы попробовать снова.`)
};

const sv_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensionerna laddades inte den här gången. Ladda om sidan för att försöka igen.`)
};

const tr_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeler bu sefer yüklenmedi. Tekrar denemek için sayfayı yenile.`)
};

const zh_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这次评价没有加载出来。请刷新页面重试。`)
};

const ja_builds_reviews_unavailable = /** @type {(inputs: Builds_Reviews_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今回はレビューを読み込めませんでした。ページを再読み込みしてください。`)
};

/**
* | output |
* | --- |
* | "Reviews didn’t load this time. Reload the page to try again." |
*
* @param {Builds_Reviews_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_reviews_unavailable = /** @type {((inputs?: Builds_Reviews_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Reviews_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_reviews_unavailable(inputs)
	if (locale === "de") return de_builds_reviews_unavailable(inputs)
	if (locale === "fr") return fr_builds_reviews_unavailable(inputs)
	if (locale === "it") return it_builds_reviews_unavailable(inputs)
	if (locale === "nl") return nl_builds_reviews_unavailable(inputs)
	if (locale === "pl") return pl_builds_reviews_unavailable(inputs)
	if (locale === "pt") return pt_builds_reviews_unavailable(inputs)
	if (locale === "ru") return ru_builds_reviews_unavailable(inputs)
	if (locale === "sv") return sv_builds_reviews_unavailable(inputs)
	if (locale === "tr") return tr_builds_reviews_unavailable(inputs)
	if (locale === "zh") return zh_builds_reviews_unavailable(inputs)
	if (locale === "ja") return ja_builds_reviews_unavailable(inputs)
	return en_builds_reviews_unavailable(inputs)
});
