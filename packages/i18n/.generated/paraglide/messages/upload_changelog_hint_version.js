/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Changelog_Hint_VersionInputs */

const en_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers see this in their notifications.`)
};

const es_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus seguidores lo ven en sus notificaciones.`)
};

const de_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Follower sehen das in ihren Benachrichtigungen.`)
};

const fr_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos abonnés le voient dans leurs notifications.`)
};

const it_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi follower lo vedono nelle loro notifiche.`)
};

const nl_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgers zien dit in hun meldingen.`)
};

const pl_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwujący zobaczą to w swoich powiadomieniach.`)
};

const pt_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus seguidores veem isso nas notificações.`)
};

const ru_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписчики увидят это в своих уведомлениях.`)
};

const sv_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina följare ser det här i sina aviseringar.`)
};

const tr_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takipçilerin bunu bildirimlerinde görür.`)
};

const zh_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注者会在通知中看到这些内容。`)
};

const ja_upload_changelog_hint_version = /** @type {(inputs: Upload_Changelog_Hint_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロワーには通知で表示されます。`)
};

/**
* | output |
* | --- |
* | "Followers see this in their notifications." |
*
* @param {Upload_Changelog_Hint_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_changelog_hint_version = /** @type {((inputs?: Upload_Changelog_Hint_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Changelog_Hint_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_changelog_hint_version(inputs)
	if (locale === "de") return de_upload_changelog_hint_version(inputs)
	if (locale === "fr") return fr_upload_changelog_hint_version(inputs)
	if (locale === "it") return it_upload_changelog_hint_version(inputs)
	if (locale === "nl") return nl_upload_changelog_hint_version(inputs)
	if (locale === "pl") return pl_upload_changelog_hint_version(inputs)
	if (locale === "pt") return pt_upload_changelog_hint_version(inputs)
	if (locale === "ru") return ru_upload_changelog_hint_version(inputs)
	if (locale === "sv") return sv_upload_changelog_hint_version(inputs)
	if (locale === "tr") return tr_upload_changelog_hint_version(inputs)
	if (locale === "zh") return zh_upload_changelog_hint_version(inputs)
	if (locale === "ja") return ja_upload_changelog_hint_version(inputs)
	return en_upload_changelog_hint_version(inputs)
});
