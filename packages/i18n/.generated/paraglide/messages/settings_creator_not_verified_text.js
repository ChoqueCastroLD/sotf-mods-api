/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Not_Verified_TextInputs */

const en_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators mark creators with a record of safe, maintained mods as Trusted. There is nothing to apply for.`)
};

const es_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los moderadores marcan como «De confianza» a los creadores con un historial de mods seguros y mantenidos. No hay nada que solicitar.`)
};

const de_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Moderation vergibt „Vertrauenswürdig“ an Creators, die sichere und gepflegte Mods vorweisen können. Beantragen musst du nichts.`)
};

const fr_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les modérateurs attribuent « De confiance » aux créateurs dont les mods sont sûrs et maintenus. Il n’y a rien à demander.`)
};

const it_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I moderatori assegnano «Affidabile» ai creator con uno storico di mod sicure e mantenute. Non c’è nulla da richiedere.`)
};

const nl_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderators geven makers met een staat van dienst van veilige, onderhouden mods de status ‘Vertrouwd’. Je hoeft niets aan te vragen.`)
};

const pl_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorzy nadają status „Zaufany” twórcom z historią bezpiecznych, utrzymywanych modów. Nie trzeba o nic wnioskować.`)
};

const pt_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os moderadores marcam como “De confiança” os criadores com histórico de mods seguros e bem mantidos. Não há nada para solicitar.`)
};

const ru_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модераторы присваивают статус «Проверенный» авторам с историей безопасных и поддерживаемых модов. Подавать заявку не нужно.`)
};

const sv_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatorer markerar skapare med en historik av säkra, underhållna moddar som ”Betrodd”. Det finns inget att ansöka om.`)
};

const tr_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatörler, güvenli ve bakımlı modlar geçmişi olan yapımcılara “Güvenilir” rozeti verir. Başvurman gereken bir şey yok.`)
};

const zh_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主会为持续发布安全、维护良好的模组的创作者标记“可信”。无需申请。`)
};

const ja_settings_creator_not_verified_text = /** @type {(inputs: Settings_Creator_Not_Verified_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全で更新されている MOD の実績があるクリエイターに、モデレーターが「信頼済み」を付けます。申請は不要です。`)
};

/**
* | output |
* | --- |
* | "Moderators mark creators with a record of safe, maintained mods as Trusted. There is nothing to apply for." |
*
* @param {Settings_Creator_Not_Verified_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_not_verified_text = /** @type {((inputs?: Settings_Creator_Not_Verified_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Not_Verified_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_not_verified_text(inputs)
	if (locale === "de") return de_settings_creator_not_verified_text(inputs)
	if (locale === "fr") return fr_settings_creator_not_verified_text(inputs)
	if (locale === "it") return it_settings_creator_not_verified_text(inputs)
	if (locale === "nl") return nl_settings_creator_not_verified_text(inputs)
	if (locale === "pl") return pl_settings_creator_not_verified_text(inputs)
	if (locale === "pt") return pt_settings_creator_not_verified_text(inputs)
	if (locale === "ru") return ru_settings_creator_not_verified_text(inputs)
	if (locale === "sv") return sv_settings_creator_not_verified_text(inputs)
	if (locale === "tr") return tr_settings_creator_not_verified_text(inputs)
	if (locale === "zh") return zh_settings_creator_not_verified_text(inputs)
	if (locale === "ja") return ja_settings_creator_not_verified_text(inputs)
	return en_settings_creator_not_verified_text(inputs)
});
