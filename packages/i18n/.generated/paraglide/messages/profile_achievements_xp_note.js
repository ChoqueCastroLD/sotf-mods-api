/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Xp_NoteInputs */

const en_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions on your own content don’t count. XP is audited and can be reversed if it came from abuse.`)
};

const es_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las acciones sobre tu propio contenido no cuentan. La XP se audita y puede revertirse si viene de un abuso.`)
};

const de_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen an eigenen Inhalten zählen nicht. XP wird geprüft und kann bei Missbrauch zurückgenommen werden.`)
};

const fr_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les actions sur votre propre contenu ne comptent pas. L’XP est contrôlée et peut être retirée en cas d’abus.`)
};

const it_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le azioni sui tuoi contenuti non contano. L’XP viene verificata e può essere annullata in caso di abuso.`)
};

const nl_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties op je eigen content tellen niet. XP wordt gecontroleerd en kan bij misbruik worden teruggedraaid.`)
};

const pl_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działania na własnych treściach się nie liczą. XP jest weryfikowane i może zostać cofnięte w razie nadużycia.`)
};

const pt_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações no seu próprio conteúdo não contam. O XP é auditado e pode ser revertido se vier de abuso.`)
};

const ru_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия с вашим собственным контентом не считаются. XP проверяется и может быть отменён, если получен нечестно.`)
};

const sv_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handlingar på ditt eget innehåll räknas inte. XP granskas och kan dras tillbaka vid missbruk.`)
};

const tr_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendi içeriğin üzerindeki eylemler sayılmaz. XP denetlenir ve kötüye kullanımdan geldiyse geri alınabilir.`)
};

const zh_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`针对自己内容的操作不计入。XP 会被审核，若来自滥用可被撤销。`)
};

const ja_profile_achievements_xp_note = /** @type {(inputs: Profile_Achievements_Xp_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分のコンテンツに対する行動はカウントされません。XP は監査され、不正によるものは取り消されることがあります。`)
};

/**
* | output |
* | --- |
* | "Actions on your own content don’t count. XP is audited and can be reversed if it came from abuse." |
*
* @param {Profile_Achievements_Xp_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_xp_note = /** @type {((inputs?: Profile_Achievements_Xp_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_xp_note(inputs)
	if (locale === "de") return de_profile_achievements_xp_note(inputs)
	if (locale === "fr") return fr_profile_achievements_xp_note(inputs)
	if (locale === "it") return it_profile_achievements_xp_note(inputs)
	if (locale === "nl") return nl_profile_achievements_xp_note(inputs)
	if (locale === "pl") return pl_profile_achievements_xp_note(inputs)
	if (locale === "pt") return pt_profile_achievements_xp_note(inputs)
	if (locale === "ru") return ru_profile_achievements_xp_note(inputs)
	if (locale === "sv") return sv_profile_achievements_xp_note(inputs)
	if (locale === "tr") return tr_profile_achievements_xp_note(inputs)
	if (locale === "zh") return zh_profile_achievements_xp_note(inputs)
	if (locale === "ja") return ja_profile_achievements_xp_note(inputs)
	return en_profile_achievements_xp_note(inputs)
});
