/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issues_HintInputs */

const en_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problems you know about. They show on the mod page; mark them fixed when a version solves them.`)
};

const es_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas que conoces. Se muestran en la página del mod; márcalos como corregidos cuando una versión los resuelva.`)
};

const de_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probleme, die du kennst. Sie erscheinen auf der Mod-Seite; markiere sie als behoben, sobald eine Version sie löst.`)
};

const fr_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les problèmes que vous connaissez. Ils s’affichent sur la page du mod ; marquez-les comme corrigés quand une version les résout.`)
};

const it_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemi che conosci. Compaiono nella pagina del mod; segnali come risolti quando una versione li risolve.`)
};

const nl_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemen die je kent. Ze staan op de modpagina; markeer ze als opgelost wanneer een versie ze verhelpt.`)
};

const pl_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemy, o których wiesz. Widać je na stronie moda; oznacz jako naprawione, gdy wersja je rozwiąże.`)
};

const pt_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problemas que você conhece. Eles aparecem na página do mod; marque como corrigidos quando uma versão os resolver.`)
};

const ru_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проблемы, о которых вы знаете. Они показываются на странице мода; отметьте исправленными, когда версия их решит.`)
};

const sv_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Problem du känner till. De visas på modsidan; markera dem som åtgärdade när en version löser dem.`)
};

const tr_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildiğin sorunlar. Mod sayfasında görünürler; bir sürüm çözdüğünde düzeltildi olarak işaretle.`)
};

const zh_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已知的问题。它们会显示在模组页面上；某个版本修复后请标记为已修复。`)
};

const ja_mod_knowledge_issues_hint = /** @type {(inputs: Mod_Knowledge_Issues_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把握している問題です。Modのページに表示されます。バージョンで解決したら修正済みにしてください。`)
};

/**
* | output |
* | --- |
* | "Problems you know about. They show on the mod page; mark them fixed when a version solves them." |
*
* @param {Mod_Knowledge_Issues_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issues_hint = /** @type {((inputs?: Mod_Knowledge_Issues_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issues_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issues_hint(inputs)
	if (locale === "de") return de_mod_knowledge_issues_hint(inputs)
	if (locale === "fr") return fr_mod_knowledge_issues_hint(inputs)
	if (locale === "it") return it_mod_knowledge_issues_hint(inputs)
	if (locale === "nl") return nl_mod_knowledge_issues_hint(inputs)
	if (locale === "pl") return pl_mod_knowledge_issues_hint(inputs)
	if (locale === "pt") return pt_mod_knowledge_issues_hint(inputs)
	if (locale === "ru") return ru_mod_knowledge_issues_hint(inputs)
	if (locale === "sv") return sv_mod_knowledge_issues_hint(inputs)
	if (locale === "tr") return tr_mod_knowledge_issues_hint(inputs)
	if (locale === "zh") return zh_mod_knowledge_issues_hint(inputs)
	if (locale === "ja") return ja_mod_knowledge_issues_hint(inputs)
	return en_mod_knowledge_issues_hint(inputs)
});
