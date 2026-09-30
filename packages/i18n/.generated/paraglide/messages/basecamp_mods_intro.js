/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_IntroInputs */

const en_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you published, in any status. Edit a listing, release a version or check why something needs attention.`)
};

const es_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que has publicado, en cualquier estado. Edita una ficha, lanza una versión o mira por qué algo necesita atención.`)
};

const de_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, was du veröffentlicht hast, in jedem Status. Bearbeite eine Seite, veröffentliche eine Version oder sieh nach, was Aufmerksamkeit braucht.`)
};

const fr_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce que tu as publié, quel que soit l’état. Modifie une fiche, sors une version ou vois ce qui demande ton attention.`)
};

const it_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che hai pubblicato, in qualsiasi stato. Modifica una scheda, pubblica una versione o scopri cosa richiede attenzione.`)
};

const nl_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat je hebt gepubliceerd, in elke status. Bewerk een pagina, breng een versie uit of kijk wat aandacht vraagt.`)
};

const pl_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, co opublikowałeś, w każdym stanie. Edytuj stronę, wydaj wersję albo sprawdź, co wymaga uwagi.`)
};

const pt_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que você publicou, em qualquer estado. Edite uma página, lance uma versão ou veja o que precisa de atenção.`)
};

const ru_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что вы опубликовали, в любом статусе. Редактируйте страницу, выпускайте версию или смотрите, что требует внимания.`)
};

const sv_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt du har publicerat, i alla lägen. Redigera en sida, släpp en version eller se vad som behöver uppmärksamhet.`)
};

const tr_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınladığın her şey, her durumda. Bir sayfayı düzenle, sürüm çıkar ya da neyin ilgi beklediğine bak.`)
};

const zh_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你发布的所有内容，无论处于什么状态。编辑页面、发布版本，或查看需要处理的事项。`)
};

const ja_basecamp_mods_intro = /** @type {(inputs: Basecamp_Mods_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開したすべてのもの（状態を問わず）。ページの編集、バージョンのリリース、対応が必要な点の確認ができます。`)
};

/**
* | output |
* | --- |
* | "Everything you published, in any status. Edit a listing, release a version or check why something needs attention." |
*
* @param {Basecamp_Mods_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_intro = /** @type {((inputs?: Basecamp_Mods_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_intro(inputs)
	if (locale === "de") return de_basecamp_mods_intro(inputs)
	if (locale === "fr") return fr_basecamp_mods_intro(inputs)
	if (locale === "it") return it_basecamp_mods_intro(inputs)
	if (locale === "nl") return nl_basecamp_mods_intro(inputs)
	if (locale === "pl") return pl_basecamp_mods_intro(inputs)
	if (locale === "pt") return pt_basecamp_mods_intro(inputs)
	if (locale === "ru") return ru_basecamp_mods_intro(inputs)
	if (locale === "sv") return sv_basecamp_mods_intro(inputs)
	if (locale === "tr") return tr_basecamp_mods_intro(inputs)
	if (locale === "zh") return zh_basecamp_mods_intro(inputs)
	if (locale === "ja") return ja_basecamp_mods_intro(inputs)
	return en_basecamp_mods_intro(inputs)
});
