/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Fair_Play_New_AccountsInputs */

const en_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brand-new accounts weigh half in ratings and compatibility until they build trust.`)
};

const es_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las cuentas recién creadas pesan la mitad en valoraciones y compatibilidad hasta ganarse la confianza.`)
};

const de_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ganz neue Konten zählen bei Bewertungen und Kompatibilität nur halb, bis sie Vertrauen aufgebaut haben.`)
};

const fr_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les comptes tout neufs comptent pour moitié dans les notes et la compatibilité jusqu’à gagner la confiance.`)
};

const it_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli account appena creati pesano la metà su voti e compatibilità finché non guadagnano fiducia.`)
};

const nl_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gloednieuwe accounts tellen half mee in beoordelingen en compatibiliteit tot ze vertrouwen opbouwen.`)
};

const pl_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zupełnie nowe konta ważą połowę w ocenach i zgodności, dopóki nie zdobędą zaufania.`)
};

const pt_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contas recém-criadas valem metade nas notas e na compatibilidade até ganharem confiança.`)
};

const ru_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совсем новые аккаунты весят вдвое меньше в оценках и совместимости, пока не заслужат доверие.`)
};

const sv_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helt nya konton väger hälften i betyg och kompatibilitet tills de byggt upp förtroende.`)
};

const tr_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yepyeni hesaplar güven kazanana kadar puanlarda ve uyumlulukta yarım ağırlıkla sayılır.`)
};

const zh_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全新账号在评分和兼容性中仅计一半权重，直到建立信任。`)
};

const ja_profile_achievements_fair_play_new_accounts = /** @type {(inputs: Profile_Achievements_Fair_Play_New_AccountsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作成されたばかりのアカウントは、信頼を得るまで評価と互換性で半分の重みになります。`)
};

/**
* | output |
* | --- |
* | "Brand-new accounts weigh half in ratings and compatibility until they build trust." |
*
* @param {Profile_Achievements_Fair_Play_New_AccountsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_fair_play_new_accounts = /** @type {((inputs?: Profile_Achievements_Fair_Play_New_AccountsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_New_AccountsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "de") return de_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "fr") return fr_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "it") return it_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "nl") return nl_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "pl") return pl_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "pt") return pt_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "ru") return ru_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "sv") return sv_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "tr") return tr_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "zh") return zh_profile_achievements_fair_play_new_accounts(inputs)
	if (locale === "ja") return ja_profile_achievements_fair_play_new_accounts(inputs)
	return en_profile_achievements_fair_play_new_accounts(inputs)
});
