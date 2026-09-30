/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Conflicts_TextInputs */

const en_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some mods declare that they don’t work together. Check their pages and keep one of each pair.`)
};

const es_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunos mods indican que no funcionan juntos. Revisa sus páginas y quédate con uno de cada pareja.`)
};

const de_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige Mods geben an, dass sie nicht zusammen funktionieren. Sieh dir ihre Seiten an und behalte je einen pro Paar.`)
};

const fr_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Certains mods indiquent qu’ils ne fonctionnent pas ensemble. Consultez leurs pages et gardez-en un par paire.`)
};

const it_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcune mod dichiarano di non funzionare insieme. Controlla le loro pagine e tienine una per coppia.`)
};

const nl_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sommige mods geven aan dat ze niet samen werken. Bekijk hun pagina’s en houd er één per paar.`)
};

const pl_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre mody deklarują, że nie działają razem. Sprawdź ich strony i zostaw po jednym z każdej pary.`)
};

const pt_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguns mods declaram que não funcionam juntos. Confira as páginas e mantenha um de cada par.`)
};

const ru_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некоторые моды заявляют, что несовместимы друг с другом. Проверьте их страницы и оставьте по одному из каждой пары.`)
};

const sv_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vissa moddar anger att de inte fungerar tillsammans. Kolla deras sidor och behåll en av varje par.`)
};

const tr_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı modlar birlikte çalışmadıklarını belirtiyor. Sayfalarına bak ve her çiftten birini tut.`)
};

const zh_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分模组声明彼此不兼容。请查看它们的页面，每对只保留一个。`)
};

const ja_kits_conflicts_text = /** @type {(inputs: Kits_Conflicts_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部の MOD は同時に使えないと宣言しています。各 MOD のページを確認し、組み合わせごとに一方だけ残してください。`)
};

/**
* | output |
* | --- |
* | "Some mods declare that they don’t work together. Check their pages and keep one of each pair." |
*
* @param {Kits_Conflicts_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_conflicts_text = /** @type {((inputs?: Kits_Conflicts_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Conflicts_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_conflicts_text(inputs)
	if (locale === "de") return de_kits_conflicts_text(inputs)
	if (locale === "fr") return fr_kits_conflicts_text(inputs)
	if (locale === "it") return it_kits_conflicts_text(inputs)
	if (locale === "nl") return nl_kits_conflicts_text(inputs)
	if (locale === "pl") return pl_kits_conflicts_text(inputs)
	if (locale === "pt") return pt_kits_conflicts_text(inputs)
	if (locale === "ru") return ru_kits_conflicts_text(inputs)
	if (locale === "sv") return sv_kits_conflicts_text(inputs)
	if (locale === "tr") return tr_kits_conflicts_text(inputs)
	if (locale === "zh") return zh_kits_conflicts_text(inputs)
	if (locale === "ja") return ja_kits_conflicts_text(inputs)
	return en_kits_conflicts_text(inputs)
});
