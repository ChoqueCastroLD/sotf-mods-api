/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Past_End_TextInputs */

const en_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This page is past the last one. The list may have shrunk since the link was shared.`)
};

const es_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página va más allá de la última. Puede que la lista haya encogido desde que se compartió el enlace.`)
};

const de_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Seite liegt hinter der letzten. Die Liste ist vielleicht kürzer geworden, seit der Link geteilt wurde.`)
};

const fr_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette page est au-delà de la dernière. La liste a peut-être raccourci depuis le partage du lien.`)
};

const it_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa pagina va oltre l’ultima. L’elenco potrebbe essersi accorciato da quando il link è stato condiviso.`)
};

const nl_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze pagina ligt voorbij de laatste. De lijst is misschien korter geworden sinds de link werd gedeeld.`)
};

const pl_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta strona jest za ostatnią. Lista mogła się skrócić od czasu udostępnienia linku.`)
};

const pt_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página vem depois da última. A lista pode ter diminuído desde que o link foi compartilhado.`)
};

const ru_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта страница дальше последней. Возможно, список стал короче с тех пор, как ссылкой поделились.`)
};

const sv_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här sidan ligger efter den sista. Listan kan ha krympt sedan länken delades.`)
};

const tr_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfa son sayfadan sonra geliyor. Bağlantı paylaşıldığından beri liste kısalmış olabilir.`)
};

const zh_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此页超出了最后一页。自链接分享以来，列表可能已变短。`)
};

const ja_explore_past_end_text = /** @type {(inputs: Explore_Past_End_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページは最終ページより先です。リンクが共有されてからリストが短くなった可能性があります。`)
};

/**
* | output |
* | --- |
* | "This page is past the last one. The list may have shrunk since the link was shared." |
*
* @param {Explore_Past_End_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_past_end_text = /** @type {((inputs?: Explore_Past_End_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Past_End_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_past_end_text(inputs)
	if (locale === "de") return de_explore_past_end_text(inputs)
	if (locale === "fr") return fr_explore_past_end_text(inputs)
	if (locale === "it") return it_explore_past_end_text(inputs)
	if (locale === "nl") return nl_explore_past_end_text(inputs)
	if (locale === "pl") return pl_explore_past_end_text(inputs)
	if (locale === "pt") return pt_explore_past_end_text(inputs)
	if (locale === "ru") return ru_explore_past_end_text(inputs)
	if (locale === "sv") return sv_explore_past_end_text(inputs)
	if (locale === "tr") return tr_explore_past_end_text(inputs)
	if (locale === "zh") return zh_explore_past_end_text(inputs)
	if (locale === "ja") return ja_explore_past_end_text(inputs)
	return en_explore_past_end_text(inputs)
});
