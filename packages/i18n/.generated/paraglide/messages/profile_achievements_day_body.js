/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Day_BodyInputs */

const en_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every profile shows how many days have passed since the account was created. Pure identity: it gives no points.`)
};

const es_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada perfil muestra cuántos días han pasado desde que se creó la cuenta. Pura identidad: no da puntos.`)
};

const de_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedes Profil zeigt, wie viele Tage seit der Kontoerstellung vergangen sind. Reine Identität: Es gibt keine Punkte.`)
};

const fr_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque profil indique le nombre de jours écoulés depuis la création du compte. Pure identité : cela ne rapporte aucun point.`)
};

const it_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni profilo mostra quanti giorni sono passati dalla creazione dell’account. Pura identità: non dà punti.`)
};

const nl_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk profiel toont hoeveel dagen er zijn verstreken sinds het account is aangemaakt. Puur identiteit: het levert geen punten op.`)
};

const pl_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy profil pokazuje, ile dni minęło od założenia konta. Czysta tożsamość: nie daje punktów.`)
};

const pt_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada perfil mostra quantos dias se passaram desde a criação da conta. Pura identidade: não dá pontos.`)
};

const ru_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждый профиль показывает, сколько дней прошло с создания аккаунта. Чистая идентичность: очков это не даёт.`)
};

const sv_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje profil visar hur många dagar som gått sedan kontot skapades. Ren identitet: det ger inga poäng.`)
};

const tr_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her profil, hesabın oluşturulmasından bu yana kaç gün geçtiğini gösterir. Tamamen kimlik: puan kazandırmaz.`)
};

const zh_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个个人主页都会显示账号创建至今的天数。纯粹的身份标识：不计分。`)
};

const ja_profile_achievements_day_body = /** @type {(inputs: Profile_Achievements_Day_BodyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各プロフィールには、アカウント作成からの経過日数が表示されます。純粋なアイデンティティで、ポイントにはなりません。`)
};

/**
* | output |
* | --- |
* | "Every profile shows how many days have passed since the account was created. Pure identity: it gives no points." |
*
* @param {Profile_Achievements_Day_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_day_body = /** @type {((inputs?: Profile_Achievements_Day_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Day_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_day_body(inputs)
	if (locale === "de") return de_profile_achievements_day_body(inputs)
	if (locale === "fr") return fr_profile_achievements_day_body(inputs)
	if (locale === "it") return it_profile_achievements_day_body(inputs)
	if (locale === "nl") return nl_profile_achievements_day_body(inputs)
	if (locale === "pl") return pl_profile_achievements_day_body(inputs)
	if (locale === "pt") return pt_profile_achievements_day_body(inputs)
	if (locale === "ru") return ru_profile_achievements_day_body(inputs)
	if (locale === "sv") return sv_profile_achievements_day_body(inputs)
	if (locale === "tr") return tr_profile_achievements_day_body(inputs)
	if (locale === "zh") return zh_profile_achievements_day_body(inputs)
	if (locale === "ja") return ja_profile_achievements_day_body(inputs)
	return en_profile_achievements_day_body(inputs)
});
