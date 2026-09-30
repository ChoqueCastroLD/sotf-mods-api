/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Apply_Tags_HintInputs */

const en_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags are added to the ones each mod already has (5 at most). Mods that aren’t public keep their tags.`)
};

const es_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las etiquetas se suman a las que ya tiene cada mod (5 como máximo). Los mods que no son públicos conservan sus etiquetas.`)
};

const de_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Tags kommen zu denen hinzu, die jeder Mod schon hat (höchstens 5). Nicht öffentliche Mods behalten ihre Tags.`)
};

const fr_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les tags s’ajoutent à ceux que chaque mod possède déjà (5 au maximum). Les mods non publics gardent leurs tags.`)
};

const it_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tag si sommano a quelli che ogni mod ha già (5 al massimo). Le mod non pubbliche mantengono i loro tag.`)
};

const nl_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags komen bij de tags die elke mod al heeft (maximaal 5). Niet-openbare mods houden hun tags.`)
};

const pl_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi dochodzą do tych, które mod już ma (maksymalnie 5). Mody niepubliczne zachowują swoje tagi.`)
};

const pt_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As tags se somam às que cada mod já tem (no máximo 5). Mods não públicos mantêm suas tags.`)
};

const ru_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги добавляются к уже имеющимся у мода (не больше 5). Неопубликованные моды сохраняют свои теги.`)
};

const sv_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggarna läggs till de som varje modd redan har (högst 5). Moddar som inte är offentliga behåller sina taggar.`)
};

const tr_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler her modun zaten sahip olduklarına eklenir (en fazla 5). Herkese açık olmayan modlar etiketlerini korur.`)
};

const zh_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签会加到每个模组已有的标签上（最多 5 个）。未公开的模组保留原有标签。`)
};

const ja_admin_recat_apply_tags_hint = /** @type {(inputs: Admin_Recat_Apply_Tags_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグは各 MOD の既存タグに追加されます（最大 5 個）。非公開の MOD はタグをそのまま残します。`)
};

/**
* | output |
* | --- |
* | "Tags are added to the ones each mod already has (5 at most). Mods that aren’t public keep their tags." |
*
* @param {Admin_Recat_Apply_Tags_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_apply_tags_hint = /** @type {((inputs?: Admin_Recat_Apply_Tags_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Apply_Tags_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_apply_tags_hint(inputs)
	if (locale === "de") return de_admin_recat_apply_tags_hint(inputs)
	if (locale === "fr") return fr_admin_recat_apply_tags_hint(inputs)
	if (locale === "it") return it_admin_recat_apply_tags_hint(inputs)
	if (locale === "nl") return nl_admin_recat_apply_tags_hint(inputs)
	if (locale === "pl") return pl_admin_recat_apply_tags_hint(inputs)
	if (locale === "pt") return pt_admin_recat_apply_tags_hint(inputs)
	if (locale === "ru") return ru_admin_recat_apply_tags_hint(inputs)
	if (locale === "sv") return sv_admin_recat_apply_tags_hint(inputs)
	if (locale === "tr") return tr_admin_recat_apply_tags_hint(inputs)
	if (locale === "zh") return zh_admin_recat_apply_tags_hint(inputs)
	if (locale === "ja") return ja_admin_recat_apply_tags_hint(inputs)
	return en_admin_recat_apply_tags_hint(inputs)
});
