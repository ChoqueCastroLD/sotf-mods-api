/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Start_HintInputs */

const en_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent pages you open from here will show up in this list.`)
};

const es_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las páginas que abras desde aquí aparecerán en esta lista.`)
};

const de_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seiten, die du hier öffnest, erscheinen in dieser Liste.`)
};

const fr_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les pages que vous ouvrez d’ici apparaîtront dans cette liste.`)
};

const it_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le pagine che apri da qui compariranno in questo elenco.`)
};

const nl_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina’s die je hier opent, verschijnen in deze lijst.`)
};

const pl_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strony otwarte stąd pojawią się na tej liście.`)
};

const pt_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As páginas que você abrir por aqui vão aparecer nesta lista.`)
};

const ru_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страницы, которые вы откроете отсюда, появятся в этом списке.`)
};

const sv_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidor du öppnar härifrån visas i den här listan.`)
};

const tr_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buradan açtığın sayfalar bu listede görünecek.`)
};

const zh_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从这里打开的页面会显示在此列表中。`)
};

const ja_cmdk_start_hint = /** @type {(inputs: Cmdk_Start_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここから開いたページがこのリストに表示されます。`)
};

/**
* | output |
* | --- |
* | "Recent pages you open from here will show up in this list." |
*
* @param {Cmdk_Start_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_start_hint = /** @type {((inputs?: Cmdk_Start_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Start_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_start_hint(inputs)
	if (locale === "de") return de_cmdk_start_hint(inputs)
	if (locale === "fr") return fr_cmdk_start_hint(inputs)
	if (locale === "it") return it_cmdk_start_hint(inputs)
	if (locale === "nl") return nl_cmdk_start_hint(inputs)
	if (locale === "pl") return pl_cmdk_start_hint(inputs)
	if (locale === "pt") return pt_cmdk_start_hint(inputs)
	if (locale === "ru") return ru_cmdk_start_hint(inputs)
	if (locale === "sv") return sv_cmdk_start_hint(inputs)
	if (locale === "tr") return tr_cmdk_start_hint(inputs)
	if (locale === "zh") return zh_cmdk_start_hint(inputs)
	if (locale === "ja") return ja_cmdk_start_hint(inputs)
	return en_cmdk_start_hint(inputs)
});
