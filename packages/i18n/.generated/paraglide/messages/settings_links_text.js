/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Links_TextInputs */

const en_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Up to ${max__number} links on your profile: your site, channels and where people can support you.`)
};

const es_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Hasta ${max__number} enlaces en tu perfil: tu web, tus canales y dónde pueden apoyarte.`)
};

const de_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Bis zu ${max__number} Links auf deinem Profil: deine Website, deine Kanäle und wo man dich unterstützen kann.`)
};

const fr_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Jusqu’à ${max__number} liens sur votre profil : votre site, vos chaînes et où l’on peut vous soutenir.`)
};

const it_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Fino a ${max__number} link sul profilo: il tuo sito, i tuoi canali e dove sostenerti.`)
};

const nl_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Tot ${max__number} links op je profiel: je website, je kanalen en waar mensen je kunnen steunen.`)
};

const pl_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Do ${max__number} linków na profilu: twoja strona, kanały i miejsca, gdzie można cię wesprzeć.`)
};

const pt_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Até ${max__number} links no seu perfil: seu site, seus canais e onde as pessoas podem apoiar você.`)
};

const ru_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`До ${max__number} ссылок в профиле: ваш сайт, каналы и где вас можно поддержать.`)
};

const sv_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Upp till ${max__number} länkar på profilen: din webbplats, dina kanaler och var folk kan stötta dig.`)
};

const tr_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Profilinde en fazla ${max__number} bağlantı: siten, kanalların ve seni nerede destekleyebilecekleri.`)
};

const zh_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`个人资料上最多 ${max__number} 个链接：你的网站、频道，以及别人可以支持你的地方。`)
};

const ja_settings_links_text = /** @type {(inputs: Settings_Links_TextInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`プロフィールに最大 ${max__number} 件のリンク：サイト、チャンネル、支援先など。`)
};

/**
* | output |
* | --- |
* | "Up to {max__number} links on your profile: your site, channels and where people can support you." |
*
* @param {Settings_Links_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_links_text = /** @type {((inputs: Settings_Links_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Links_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_links_text(inputs)
	if (locale === "de") return de_settings_links_text(inputs)
	if (locale === "fr") return fr_settings_links_text(inputs)
	if (locale === "it") return it_settings_links_text(inputs)
	if (locale === "nl") return nl_settings_links_text(inputs)
	if (locale === "pl") return pl_settings_links_text(inputs)
	if (locale === "pt") return pt_settings_links_text(inputs)
	if (locale === "ru") return ru_settings_links_text(inputs)
	if (locale === "sv") return sv_settings_links_text(inputs)
	if (locale === "tr") return tr_settings_links_text(inputs)
	if (locale === "zh") return zh_settings_links_text(inputs)
	if (locale === "ja") return ja_settings_links_text(inputs)
	return en_settings_links_text(inputs)
});
