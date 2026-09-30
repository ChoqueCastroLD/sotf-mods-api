/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Link_TextInputs */

const en_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy this snippet into your README, website or mod description. It points to the live logo, so it always stays up to date.`)
};

const es_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia este fragmento en tu README, tu web o la descripción de tu mod. Apunta al logo publicado, así que siempre estará al día.`)
};

const de_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiere diesen Code in dein README, deine Website oder deine Mod-Beschreibung. Er zeigt auf das Live-Logo und bleibt so immer aktuell.`)
};

const fr_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiez ce code dans votre README, votre site ou la description de votre mod. Il pointe vers le logo en ligne, il reste donc toujours à jour.`)
};

const it_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia questo codice nel tuo README, nel tuo sito o nella descrizione della mod. Punta al logo online, quindi resta sempre aggiornato.`)
};

const nl_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieer deze code naar je README, website of modbeschrijving. Hij verwijst naar het live logo en blijft dus altijd actueel.`)
};

const pl_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiuj ten kod do README, na swoją stronę lub do opisu moda. Wskazuje na logo online, więc zawsze jest aktualne.`)
};

const pt_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copie este código no seu README, site ou descrição do mod. Ele aponta para o logo online, então fica sempre atualizado.`)
};

const ru_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопируйте этот код в README, на свой сайт или в описание мода. Он ссылается на логотип на сайте, поэтому всегда актуален.`)
};

const sv_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera koden till din README, webbplats eller moddbeskrivning. Den pekar på logotypen online, så den är alltid aktuell.`)
};

const tr_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kodu README dosyana, web sitene veya mod açıklamana kopyala. Canlı logoyu gösterdiği için her zaman güncel kalır.`)
};

const zh_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把这段代码复制到你的 README、网站或模组介绍中。它指向在线标志，因此始终保持最新。`)
};

const ja_content_brand_link_text = /** @type {(inputs: Content_Brand_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコードを README、ウェブサイト、MOD の説明にコピーしてください。公開中のロゴを参照するので、常に最新の状態です。`)
};

/**
* | output |
* | --- |
* | "Copy this snippet into your README, website or mod description. It points to the live logo, so it always stays up to date." |
*
* @param {Content_Brand_Link_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_link_text = /** @type {((inputs?: Content_Brand_Link_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Link_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_link_text(inputs)
	if (locale === "de") return de_content_brand_link_text(inputs)
	if (locale === "fr") return fr_content_brand_link_text(inputs)
	if (locale === "it") return it_content_brand_link_text(inputs)
	if (locale === "nl") return nl_content_brand_link_text(inputs)
	if (locale === "pl") return pl_content_brand_link_text(inputs)
	if (locale === "pt") return pt_content_brand_link_text(inputs)
	if (locale === "ru") return ru_content_brand_link_text(inputs)
	if (locale === "sv") return sv_content_brand_link_text(inputs)
	if (locale === "tr") return tr_content_brand_link_text(inputs)
	if (locale === "zh") return zh_content_brand_link_text(inputs)
	if (locale === "ja") return ja_content_brand_link_text(inputs)
	return en_content_brand_link_text(inputs)
});
