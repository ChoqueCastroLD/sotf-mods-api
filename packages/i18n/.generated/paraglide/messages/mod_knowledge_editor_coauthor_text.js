/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ owner: NonNullable<unknown> }} Mod_Knowledge_Editor_Coauthor_TextInputs */

const en_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You can release versions and edit the known issues and FAQ. The listing, media and status stay with ${i?.owner}.`)
};

const es_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Puedes publicar versiones y editar los problemas conocidos y la FAQ. La ficha, los medios y el estado siguen a cargo de ${i?.owner}.`)
};

const de_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du kannst Versionen veröffentlichen und die bekannten Probleme und FAQ bearbeiten. Eintrag, Medien und Status bleiben bei ${i?.owner}.`)
};

const fr_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous pouvez publier des versions et modifier les problèmes connus et la FAQ. La fiche, les médias et le statut restent gérés par ${i?.owner}.`)
};

const it_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Puoi rilasciare versioni e modificare problemi noti e FAQ. Scheda, media e stato restano a ${i?.owner}.`)
};

const nl_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je kunt versies uitbrengen en de bekende problemen en FAQ bewerken. Vermelding, media en status blijven bij ${i?.owner}.`)
};

const pl_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Możesz wydawać wersje i edytować znane problemy oraz FAQ. Opis, media i status pozostają w gestii ${i?.owner}.`)
};

const pt_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você pode lançar versões e editar os problemas conhecidos e a FAQ. A ficha, as mídias e o status ficam com ${i?.owner}.`)
};

const ru_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы можете выпускать версии и редактировать известные проблемы и FAQ. Описание, медиа и статус остаются за ${i?.owner}.`)
};

const sv_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du kan släppa versioner och redigera kända problem och FAQ. Sidan, media och status ligger kvar hos ${i?.owner}.`)
};

const tr_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sürüm yayınlayabilir, bilinen sorunları ve SSS’yi düzenleyebilirsin. Liste, medya ve durum ${i?.owner} kullanıcısında kalır.`)
};

const zh_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你可以发布版本并编辑已知问题和 FAQ。页面信息、媒体和状态仍由 ${i?.owner} 管理。`)
};

const ja_mod_knowledge_editor_coauthor_text = /** @type {(inputs: Mod_Knowledge_Editor_Coauthor_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョンの公開と、既知の問題・FAQの編集ができます。掲載情報、メディア、ステータスは ${i?.owner} が管理します。`)
};

/**
* | output |
* | --- |
* | "You can release versions and edit the known issues and FAQ. The listing, media and status stay with {owner}." |
*
* @param {Mod_Knowledge_Editor_Coauthor_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_editor_coauthor_text = /** @type {((inputs: Mod_Knowledge_Editor_Coauthor_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Editor_Coauthor_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "de") return de_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "fr") return fr_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "it") return it_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "nl") return nl_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "pl") return pl_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "pt") return pt_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "ru") return ru_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "sv") return sv_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "tr") return tr_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "zh") return zh_mod_knowledge_editor_coauthor_text(inputs)
	if (locale === "ja") return ja_mod_knowledge_editor_coauthor_text(inputs)
	return en_mod_knowledge_editor_coauthor_text(inputs)
});
