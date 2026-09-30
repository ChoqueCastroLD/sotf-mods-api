/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Comments_UnavailableInputs */

const en_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments couldn’t load right now. Reload the page to try again.`)
};

const es_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los comentarios no han podido cargarse. Recarga la página para intentarlo de nuevo.`)
};

const de_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Kommentare konnten gerade nicht geladen werden. Lade die Seite neu.`)
};

const fr_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les commentaires n’ont pas pu se charger. Rechargez la page pour réessayer.`)
};

const it_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i commenti. Ricarica la pagina per riprovare.`)
};

const nl_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De reacties konden niet worden geladen. Herlaad de pagina om het opnieuw te proberen.`)
};

const pl_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać komentarzy. Odśwież stronę, aby spróbować ponownie.`)
};

const pt_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os comentários. Recarregue a página para tentar de novo.`)
};

const ru_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить комментарии. Обновите страницу, чтобы попробовать снова.`)
};

const sv_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarerna kunde inte laddas. Ladda om sidan för att försöka igen.`)
};

const tr_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar yüklenemedi. Tekrar denemek için sayfayı yenile.`)
};

const zh_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论暂时无法加载，请刷新页面重试。`)
};

const ja_mod_comments_unavailable = /** @type {(inputs: Mod_Comments_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを読み込めませんでした。ページを再読み込みしてください。`)
};

/**
* | output |
* | --- |
* | "Comments couldn’t load right now. Reload the page to try again." |
*
* @param {Mod_Comments_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_comments_unavailable = /** @type {((inputs?: Mod_Comments_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Comments_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_comments_unavailable(inputs)
	if (locale === "de") return de_mod_comments_unavailable(inputs)
	if (locale === "fr") return fr_mod_comments_unavailable(inputs)
	if (locale === "it") return it_mod_comments_unavailable(inputs)
	if (locale === "nl") return nl_mod_comments_unavailable(inputs)
	if (locale === "pl") return pl_mod_comments_unavailable(inputs)
	if (locale === "pt") return pt_mod_comments_unavailable(inputs)
	if (locale === "ru") return ru_mod_comments_unavailable(inputs)
	if (locale === "sv") return sv_mod_comments_unavailable(inputs)
	if (locale === "tr") return tr_mod_comments_unavailable(inputs)
	if (locale === "zh") return zh_mod_comments_unavailable(inputs)
	if (locale === "ja") return ja_mod_comments_unavailable(inputs)
	return en_mod_comments_unavailable(inputs)
});
