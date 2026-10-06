/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_DescriptionInputs */

const en_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every moderator and admin action: who, what, before and after, and why. Entries can’t be edited.`)
};

const es_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada acción de moderadores y admins: quién, qué, antes y después, y por qué. Las entradas no se pueden editar.`)
};

const de_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Aktion von Moderatoren und Admins: wer, was, vorher und nachher und warum. Einträge lassen sich nicht bearbeiten.`)
};

const fr_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque action des modérateurs et des admins : qui, quoi, avant et après, et pourquoi. Les entrées ne peuvent pas être modifiées.`)
};

const it_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni azione di moderatori e admin: chi, cosa, prima e dopo, e perché. Le voci non si possono modificare.`)
};

const nl_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke actie van moderators en admins: wie, wat, voor en na, en waarom. Regels kunnen niet worden bewerkt.`)
};

const pl_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każde działanie moderatorów i administratorów: kto, co, przed i po oraz dlaczego. Wpisów nie można edytować.`)
};

const pt_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada ação de moderadores e admins: quem, o quê, antes e depois, e por quê. As entradas não podem ser editadas.`)
};

const ru_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждое действие модераторов и администраторов: кто, что, до и после и почему. Записи нельзя изменить.`)
};

const sv_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje åtgärd av moderatorer och admins: vem, vad, före och efter och varför. Poster kan inte redigeras.`)
};

const tr_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörlerin ve yöneticilerin her işlemi: kim, ne, önce ve sonra, neden. Kayıtlar düzenlenemez.`)
};

const zh_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主和管理员的每项操作：谁、做了什么、前后变化以及原因。记录不可编辑。`)
};

const ja_ranger_audit_description = /** @type {(inputs: Ranger_Audit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターと管理者のすべての操作：誰が、何を、変更前後、そして理由。記録は編集できません。`)
};

/**
* | output |
* | --- |
* | "Every moderator and admin action: who, what, before and after, and why. Entries can’t be edited." |
*
* @param {Ranger_Audit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_description = /** @type {((inputs?: Ranger_Audit_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_description(inputs)
	if (locale === "de") return de_ranger_audit_description(inputs)
	if (locale === "fr") return fr_ranger_audit_description(inputs)
	if (locale === "it") return it_ranger_audit_description(inputs)
	if (locale === "nl") return nl_ranger_audit_description(inputs)
	if (locale === "pl") return pl_ranger_audit_description(inputs)
	if (locale === "pt") return pt_ranger_audit_description(inputs)
	if (locale === "ru") return ru_ranger_audit_description(inputs)
	if (locale === "sv") return sv_ranger_audit_description(inputs)
	if (locale === "tr") return tr_ranger_audit_description(inputs)
	if (locale === "zh") return zh_ranger_audit_description(inputs)
	if (locale === "ja") return ja_ranger_audit_description(inputs)
	return en_ranger_audit_description(inputs)
});
