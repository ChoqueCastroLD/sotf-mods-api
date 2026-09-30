/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Team_HintInputs */

const en_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-authors appear on the mod page and their profile. They can release versions and edit the known issues and FAQ.`)
};

const es_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los coautores aparecen en la página del mod y en su perfil. Pueden publicar versiones y editar los problemas conocidos y la FAQ.`)
};

const de_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-Autoren erscheinen auf der Mod-Seite und in ihrem Profil. Sie können Versionen veröffentlichen und bekannte Probleme sowie FAQ bearbeiten.`)
};

const fr_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les co-auteurs apparaissent sur la page du mod et sur leur profil. Ils peuvent publier des versions et modifier les problèmes connus et la FAQ.`)
};

const it_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I coautori compaiono nella pagina del mod e nel loro profilo. Possono rilasciare versioni e modificare problemi noti e FAQ.`)
};

const nl_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteurs staan op de modpagina en op hun profiel. Ze kunnen versies uitbrengen en de bekende problemen en FAQ bewerken.`)
};

const pl_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Współautorzy widnieją na stronie moda i w swoim profilu. Mogą wydawać wersje i edytować znane problemy oraz FAQ.`)
};

const pt_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautores aparecem na página do mod e no perfil deles. Podem lançar versões e editar os problemas conhecidos e a FAQ.`)
};

const ru_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соавторы отображаются на странице мода и в своём профиле. Они могут выпускать версии и редактировать известные проблемы и FAQ.`)
};

const sv_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medförfattare visas på modsidan och i sin profil. De kan släppa versioner och redigera kända problem och FAQ.`)
};

const tr_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak yazarlar mod sayfasında ve kendi profillerinde görünür. Sürüm yayınlayabilir, bilinen sorunları ve SSS’yi düzenleyebilir.`)
};

const zh_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同作者会显示在模组页面和他们的个人资料中。他们可以发布版本并编辑已知问题和 FAQ。`)
};

const ja_mod_knowledge_team_hint = /** @type {(inputs: Mod_Knowledge_Team_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共同制作者はModのページと自身のプロフィールに表示されます。バージョンの公開と、既知の問題・FAQの編集ができます。`)
};

/**
* | output |
* | --- |
* | "Co-authors appear on the mod page and their profile. They can release versions and edit the known issues and FAQ." |
*
* @param {Mod_Knowledge_Team_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_team_hint = /** @type {((inputs?: Mod_Knowledge_Team_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_team_hint(inputs)
	if (locale === "de") return de_mod_knowledge_team_hint(inputs)
	if (locale === "fr") return fr_mod_knowledge_team_hint(inputs)
	if (locale === "it") return it_mod_knowledge_team_hint(inputs)
	if (locale === "nl") return nl_mod_knowledge_team_hint(inputs)
	if (locale === "pl") return pl_mod_knowledge_team_hint(inputs)
	if (locale === "pt") return pt_mod_knowledge_team_hint(inputs)
	if (locale === "ru") return ru_mod_knowledge_team_hint(inputs)
	if (locale === "sv") return sv_mod_knowledge_team_hint(inputs)
	if (locale === "tr") return tr_mod_knowledge_team_hint(inputs)
	if (locale === "zh") return zh_mod_knowledge_team_hint(inputs)
	if (locale === "ja") return ja_mod_knowledge_team_hint(inputs)
	return en_mod_knowledge_team_hint(inputs)
});
